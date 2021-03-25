import logo from './logo.svg';
import './App.css';
import React from 'react';


class App extends React.Component {
  render() {
    return (
      <>
        <h1>Tổng hợp tài liệu</h1>
        <ul>
          <li>
            <p>
              Google Drive chứa tài liệu:&nbsp;
              <a href="https://drive.google.com/drive/folders/15nU77aFULqZq2FFJchqS16WG0qmEykwc?usp=sharing">
                Link
              </a>
            </p>
          </li>
          <li>
            <p>
              Link Trello:&nbsp;
              <a href="https://trello.com/heartratemonitor2021">
                Link
              </a>
            </p>
          </li>
        </ul>
        <hr />
          <h1>Nội dung nộp</h1>
          <ul>
            <li>
              <p>
                Video bảo vệ thử khoá luận:&nbsp;
              <a href="">
                  Link
              </a>
              </p>
            </li>
            <li>
              <p>
                Video hướng dẫn triển khai:&nbsp;
              <a href="">
                  Link
              </a>
              </p>
            </li>
            <li>
              <p>
                Video demo ứng dụng:&nbsp;
              <a href="">
                  Link
              </a>
              </p>
            </li>
            <li>
              <p>Mã nguồn:&nbsp;</p>
              <ul>
                <li>
                  <p>
                    Mã nguồn iOS:&nbsp;
              <a href="https://github.com/vandat0599/Heart-Rate-Monitoring-iOS">
                      Link (github)
              </a>
                  </p>
                </li>
                <li>
                  <p>
                    Mã nguồn backend:&nbsp;
              <a href="https://github.com/HongCong9991/Heart-Rate-Monitor-Backend">
                      Link (github)
              </a>
                  </p>
                </li>
                <li>
                  <p>
                    Mã nguồn trang demo:&nbsp;
              <a href="">
                      Link (github)
              </a>
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <p>
                Slide thuyết trình bảo vệ:&nbsp;
              <a href="">
                  Link
              </a>
              </p>
            </li>
            <li>
              <p>
                Luận văn:&nbsp;
              <a href="">
                  (PDF)
              </a>
              <a href="">
                  (docx)
              </a>
              </p>
            </li>
            <li>
              <p>
                Tài liệu hướng dẫn cài đặt và biên dịch:&nbsp;
              <a href="">
                  (PDF)
              </a>
              <a href="">
                  (docx)
              </a>
              </p>
            </li>
            <li>
              <p>
                Tài liệu hướng dẫn triển khai:&nbsp;
              <a href="">
                  (PDF)
              </a>
              <a href="">
                  (docx)
              </a>
              </p>
            </li>
          </ul>
        <hr />
        <h1>Cập nhật quá trình</h1>
        
        <h2>16/03/2021</h2>
        <ul>
          <li>
            <p>
            Cập nhật các hàm liên quan tới tính năng đo nhịp tim
            </p>
          </li>
          <li>
            <p>
            Chức năng đăng kí/ đăng nhập/ đăng nhập bằng Google
            </p>
          </li>
          <li>
            <p>
            Tạo dữ liệu giả cho mục đích test
            </p>
          </li>
          <li>
            <p>
            Cập nhật Prototype hoàn chỉnh
            </p>
          </li>
        </ul>
        
        <h2>09/03/2021</h2>
        <ul>
          <li>
            <a href="https://drive.google.com/file/d/1RhfNkrwM8JZmDkMdr1ZBByoih-wD7nwN/view?usp=sharing">
              Prototype tính năng đo nhịp tim
            </a>
          </li>
          <li>
            <a href="">
              Design logo app
            </a>
          </li>
          <li>
            <a href="https://vsrelease072021.herokuapp.com/">
              Website release
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/16vFXtpweo4ySWccbEqynNK5TIQuNWQ9K/view?usp=sharing">
              Sơ đồ lưu trữ dữ liệu
            </a>
          </li>
          <li>
            <p>
              Phân tích, chạy thử thư viện / mã nguồn mở 
            </p>
          </li>
        </ul>
      </>
    );
  }

}
export default App;