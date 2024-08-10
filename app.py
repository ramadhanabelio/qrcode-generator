import os
import qrcode
from PIL import Image
from flask import Flask, render_template, request, send_file, redirect, url_for

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate', methods=['POST'])
def generate_qrcode():
    url = request.form['url']

    qr = qrcode.QRCode(version=1, box_size=10, border=5)
    qr.add_data(url)
    qr.make(fit=True)

    img = qr.make_image(fill="black", back_color="white")

    filename = os.path.join('static/img/qrcodes', 'qr_code.png')
    img.save(filename)

    return send_file(filename, as_attachment=True)

@app.route('/index')
def back_to_index():
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)
