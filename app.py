from flask import Flask, render_template, redirect
from flask_mail import Mail, Message

app = Flask(__name__)
app.secret_key = 'sla123'

mail_settings = {
    "MAIL_SERVER": 'smtp.gmail.com',
    "MAIL_PORT": 465,
    "MAIL_USE_TLS": False,
    "MAIL_USE_SSL": True,
    "MAIL_USERNAME": email,
    "MAIL_PASSWORD": mail_senha
}

@app.route('/')
def index():
    return render_template('index.html')

if __name__ =='__main__':
    app.run(debug=True)