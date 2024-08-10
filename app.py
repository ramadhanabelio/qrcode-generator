import os
import qrcode
import uuid
from flask import Flask, render_template, request, redirect, send_file, url_for

app = Flask(__name__)
save_dir = os.path.join('static', 'img', 'qrcodes')
os.makedirs(save_dir, exist_ok=True)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate', methods=['POST'])
def generate_qrcode():
    url = request.form.get('url')
    if not url:
        return redirect(url_for('index'))

    img = qrcode.make(url)
    random_filename = f"{uuid.uuid4()}.png"
    save_path = os.path.join(save_dir, random_filename)
    img.save(save_path)

    return redirect(url_for('download', qrcode=random_filename))

@app.route('/download')
def download():
    qrcode_name = request.args.get('qrcode')
    file_path = os.path.join(save_dir, qrcode_name)
    return send_file(file_path, as_attachment=True)

if __name__ == '__main__':
    app.run(debug=True)
