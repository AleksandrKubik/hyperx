import { Context } from '@cloudflare/workers-types'

export interface Env {
    // Определите переменные окружения здесь, если они нужны
}

interface RequestContext {
    request: Request;
    next: () => Promise<Response>;
    env: Env;
}

export const onRequest = async ({ request, next }: RequestContext) => {
    const response = await next()

    // Добавляем заголовки безопасности
    response.headers.set('X-Frame-Options', 'DENY')
    response.headers.set('X-Content-Type-Options', 'nosniff')
    response.headers.set('Referrer-Policy', 'no-referrer')
    response.headers.set('Permissions-Policy', 'document-domain=()')
    response.headers.set('Content-Security-Policy',
        "script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; frame-ancestors 'none'")

    // Блокируем индексацию тестового домена
    if (request.url.includes('.pages.dev')) {
        response.headers.set('X-Robots-Tag', 'noindex')
    }

    return response
} 