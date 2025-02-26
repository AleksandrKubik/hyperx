import { Context } from '@cloudflare/workers-types'

export interface Env {
    // Определите переменные окружения здесь, если они нужны
}

export const onRequest = async (context: any) => {
    const response = await context.next()

    // Добавляем заголовки безопасности
    response.headers.set('X-Frame-Options', 'DENY')
    response.headers.set('X-Content-Type-Options', 'nosniff')
    response.headers.set('Referrer-Policy', 'no-referrer')
    response.headers.set('Permissions-Policy', 'document-domain=()')
    response.headers.set('Content-Security-Policy',
        "script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; frame-ancestors 'none'")

    // Блокируем индексацию тестового домена
    if (context.request.url.includes('.pages.dev')) {
        response.headers.set('X-Robots-Tag', 'noindex')
    }

    return response
} 