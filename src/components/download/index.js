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
    <p style={{margin: "20px 10px",}}><a className="button button--primary" href="https://packages.nnz-ipc.net/napilinux" target="_blank">Все образы NapiLinux</a></p>
     /*
      <h2>Список установочных образов</h2>
      <ul>{imgFileList}</ul>
      <h2>Список обновлений</h2>
      <ul>{swuFileList}</ul>
      */
    </div>
  );
}

export default FileList;
