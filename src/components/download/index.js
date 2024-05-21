import React, { useEffect, useState } from 'react';

function FileList() {
  const sha256sumUrl = "https://packages.nnz-ipc.net/napilinux/nnz-napi-image/napi-rk3308b-s/SHA256SUM";
  
  const [imgFileList, setImgFileList] = useState([]);
  const [swuFileList, setSwuFileList] = useState([]);
  
  useEffect(() => {
    async function fetchAndProcessSHA256SUM() {
      try {
        const response = await fetch(sha256sumUrl);
        const text = await response.text();
        
        const lines = text.trim().split("\n");
        
        const imgFiles = [];
        const swuFiles = [];
        
        lines.forEach(line => {
          const [sha256sum, filename] = line.split(/\s+/);
          const fileUrl = `https://packages.nnz-ipc.net/napilinux/nnz-napi-image/napi-rk3308b-s/${filename}`;
          
          if (filename.includes(".img.")) {
            imgFiles.push(<li key={filename}><a href={fileUrl} target="_blank">{filename}</a> - <span className="hash">{sha256sum}</span></li>);
          }
          
          if (filename.includes(".swu.")) {
            swuFiles.push(<li key={filename}><a href={fileUrl} target="_blank">{filename}</a> - <span className="hash">{sha256sum}</span></li>);
          }
        });
        imgFiles.reverse();
        swuFiles.reverse();
        setImgFileList(imgFiles.slice(0, 2));
        setSwuFileList(swuFiles.slice(0, 2));
      } catch (error) {
        console.error("Ошибка при загрузке списка:", error);
      }
    }
    
    fetchAndProcessSHA256SUM();
  }, []);
  
  return (
    <div className="container">
      <p></p>
    <p> <h2>Текущая версия NapiLinux - 0.1.18</h2>
    <ul>
    <li>Файл xxx-rootfs_wic.xz - полная прошивка </li>
    <li>Файл xxx-.swu - апдейт</li>
    </ul>
    </p>
    <p style={{margin: "20px 10px",}}><a className="button button--primary" href="https://packages.nnz-ipc.net/napilinux/napilinux-napi-based-devs-rk3308bs/" target="_blank">NapiLinux для устройств на базе rk3308 (Napi C/P/S)</a></p>
    <p style={{margin: "20px 10px",}}><a className="button button--primary" href="https://packages.nnz-ipc.net/napilinux/napilinux-roc-rk3328-cc/" target="_blank">Napilinux для ROC-rk3328-CC на базе rk3328</a></p>
    <p style={{margin: "20px 10px",}}><a className="button button--primary" href="https://packages.nnz-ipc.net/napilinux/napilinux-rockpro64-rk3399/" target="_blank">Napilinux для RockPro 64 на базе rk3399(Pine64)</a></p>
    <a href="https://packages.nnz-ipc.net/napilinux/armbian-napi-based-devs-rk3308bs/">ArmBian for Napi devices</a>
    </div>
  );
}

export default FileList;
