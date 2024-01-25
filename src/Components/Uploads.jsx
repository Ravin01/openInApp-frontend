import { useRef, useState } from "react";
import "../Styles/Uploads.css";

const Uploads = () => {
  const fileInputRef = useRef(null);

  const [isUploading, setIsUploading] = useState(false)
  const [isUploaded, setIsUploaded] = useState(false)

  const handleDropAreaClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    // Do something with the selected file, for example, display its name
    console.log("Selected File:", selectedFile.name);
  };
  return (
    <div className="uploads-con">
      <div className="uploads-con2">
        <div onClick={handleDropAreaClick} className="upload-div">
            <img src="https://download.logo.wine/logo/Microsoft_Excel/Microsoft_Excel-Logo.wine.png" className="upload-excel-img" alt="" />
            <div className="upload-span-div">
          <span>Drop your file or</span>
          {
            !isUploaded && 
            <>

          {
              !isUploading && 
              <span className="upload-file-browse">Browse</span>
            }
          {
              isUploading && 
              <p className="upload-file-remove" >Remove</p>
            }
            </>
        }
            </div>
        </div>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        {
            isUploaded ?
            <div className="upload-uploaded">

            </div>
            :
            <>
{
            isUploading ? 
            <div className="upload-loader-con">
            <div className="upload-loader"></div>
        </div>
            :
        <div className="upload-button">
          <i className="fa-solid fa-arrow-up-from-bracket"></i>
          <p>upload</p>
        </div>
        }
            </> 
        }
        
      </div>
    </div>
  );
};

export default Uploads;
