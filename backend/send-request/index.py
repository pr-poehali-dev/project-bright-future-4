import json
import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправка заявки от клиента на почту Toystroy71rus@mail.ru"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    body = json.loads(event.get('body', '{}'))
    name = body.get('name', '')
    phone = body.get('phone', '')
    building_type = body.get('buildingType', '')
    area = body.get('area', '')
    comment = body.get('comment', '')

    html = f"""
    <h2>Новая заявка с сайта TOYSTROY</h2>
    <table cellpadding="8" style="border-collapse:collapse; font-size:15px;">
      <tr><td><b>Имя:</b></td><td>{name}</td></tr>
      <tr><td><b>Телефон:</b></td><td>{phone}</td></tr>
      <tr><td><b>Тип постройки:</b></td><td>{building_type}</td></tr>
      <tr><td><b>Площадь:</b></td><td>{area} м²</td></tr>
      <tr><td><b>Пожелания:</b></td><td>{comment}</td></tr>
    </table>
    """

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка от {name} — {building_type}'
    msg['From'] = 'Toystroy71rus@mail.ru'
    msg['To'] = 'Toystroy71rus@mail.ru'
    msg.attach(MIMEText(html, 'html'))

    with smtplib.SMTP_SSL('smtp.mail.ru', 465) as smtp:
        smtp.login('Toystroy71rus@mail.ru', os.environ['SMTP_PASSWORD'])
        smtp.send_message(msg)

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'success': True})
    }
