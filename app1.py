import os
import qrcode
from flask import Flask, render_template, request, redirect, send_file
import uuid

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate', methods=['POST'])
def generate():
    url = request.form['url']

    qr = qrcode.QRCode(version=1, box_size=10, border=5)
    qr.add_data(url)
    qr.make(fit=True)

    image = qr.make_image(fill="black", back_color="white")

    save_dir = os.path.join('img', 'qrcodes')
    os.makedirs(save_dir, exist_ok=True)

    random_filename = str(uuid.uuid4())
    save_path = os.path.join(save_dir, f"{random_filename}.png")

    image.save(save_path)

    return redirect('/download?qrcode=' + random_filename)

@app.route('/download')
def download():
    qrcode_name = request.args.get('qrcode')
    save_dir = os.path.join('img', 'qrcodes')
    file_path = os.path.join(save_dir, f"{qrcode_name}.png")

    return send_file(file_path, as_attachment=True)

if __name__ == '__main__':
    app.run(debug=True)