/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import "../Styles/Uploads.css";
import { readExcel } from "../Utils/readExcel";
import { Link } from "react-router-dom";

const Uploads = ({name}) => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);

  const handleFileUpload = () => {
    if(uploadedFile){

      setIsUploading(true);
        setTimeout(() => {
          setIsUploading(false);
          setIsUploaded(true);
        }, 5000);
      
    }else{
      alert('please select file')
    }
    
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setUploadedFile(file);
  };

  const handleRemoveClick = () => {
    setUploadedFile(null)
    setIsUploading(false)
    setIsUploaded(false)
    setTimeout(() => {
      setIsUploading(false);
      setIsUploaded(false);
    }, 5000);
  };
  const fileInputRef = useRef(null);

  const handleBrowseClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = e.dataTransfer.files;
    setUploadedFile(droppedFiles[0]);
  };

  const handleDropAreaClick = (e) => {
    e.preventDefault();
  };






  const [excelData, setExcelData] = useState(null);

  const handleReadExcel = async () => {
    try {
      const data = await readExcel(uploadedFile);
      setIsUploading(!isUploading);
      if (data) {
        setExcelData(data);
        setIsUploading(false);
        setIsUploaded(true);
      }
    } catch (error) {
      console.error("Error reading Excel file:", error);
    }
  };

  useEffect(() => {
    handleReadExcel();
    setUploadedFile(null)
  }, [isUploaded]);

  const [selectedTags, setSelectedTags] = useState({});

  const handleTagChange = (rowIndex, selectedTag) => {
    setSelectedTags((prevTags) => {
      const existingTags = prevTags[rowIndex] || [];
      const updatedTags = {
        ...prevTags,
        [rowIndex]: [...existingTags, selectedTag],
      };
      return updatedTags;
    });
  };

  const handleRemoveTag = (rowIndex, tagIndex) => {
    setSelectedTags((prevTags) => {
      const updatedTags = { ...prevTags };
      updatedTags[rowIndex] = updatedTags[rowIndex].filter(
        (_, i) => i !== tagIndex
      );
      return updatedTags;
    });
  };

  return (
    <>
      <div className="upload-excel-con">
        <h4 className="upload-name">
          {name}
        </h4>
        <div className="uploads-con">
          <div className="uploads-con2">
            <div
              className="upload-div"
              onDrop={handleDrop}
              onDragOver={handleDropAreaClick}
            >
              <img
                src="https://download.logo.wine/logo/Microsoft_Excel/Microsoft_Excel-Logo.wine.png"
                className="upload-excel-img"
                alt="microsoft"
              />
              
              <div className="upload-span-div">
              {
                uploadedFile === null ? 
                <span>Drop your file or</span>
                :
                <span>{uploadedFile.name}</span>
              }
                { !isUploading && <span
                  className="upload-file-browse"
                  onClick={handleBrowseClick}
                >
                  Browse
                </span>}
                {isUploading && (
                  <span
                    className="upload-file-remove"
                    onClick={handleRemoveClick}
                  >
                    Remove
                  </span>
                )}
              </div>
              <input
                type="file"
                onChange={handleFileChange}
                style={{ display: "none" }}
                ref={fileInputRef}
                required
              />
            </div>

            {isUploaded ? (
              <div className="upload-uploaded"></div>
            ) : (
              <>
                {isUploading ? (
                  <div className="upload-loader-con">
                    <div className="upload-loader"></div>
                  </div>
                ) : (
                  <div className="upload-button" onClick={handleFileUpload}>
                    <i className="fa-solid fa-arrow-up-from-bracket"></i>
                    <p>upload</p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        <div className="read-excel-con">
          {excelData && (
            <div className="excel-con">
              <h4>Uploads</h4>
              {/* <pre>{JSON.stringify(excelData, null, 2)}</pre> */}
              <table className="excel-table">
                <thead>
                  <tr>
                    <th>SI NO.</th>
                    <th>Links</th>
                    <th>Prefix</th>
                    <th>Add Tags</th>
                    <th>Selected Tags</th>
                  </tr>
                </thead>
                <tbody className="excel-tbody">
                  {excelData.slice(1).map((row, rowIndex) => (
                    <tr key={rowIndex} className="excel-table-row">
                      <td>{row[0]}</td>
                      <td>
                        <Link to={`http://${row[1]}`} target="_blank">
                          {row[1]}
                        </Link>
                      </td>
                      <td>{row[2]}</td>
                      <td>
                        <select
                          name={`tags_${rowIndex}`}
                          id={`tags_${rowIndex}`}
                          onChange={(e) =>
                            handleTagChange(rowIndex, e.target.value)
                          }
                          className="excel-table-select"
                        >
                          <option value="">Select Tags</option>
                          {row[3].split(",").map((option, i) => (
                            <option value={option} key={i}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td>
                        <div className="excel-selectedTags-td">
                          {selectedTags[rowIndex] &&
                            selectedTags[rowIndex].map((tag, tagIndex) => (
                              <div
                                key={tagIndex}
                                className="excel-selectedTags-item"
                              >
                                {tag}{" "}
                                <button
                                  onClick={() =>
                                    handleRemoveTag(rowIndex, tagIndex)
                                  }
                                  className="excel-selectedTags-cancel-btn"
                                >
                                  x
                                </button>
                              </div>
                            ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Uploads;
