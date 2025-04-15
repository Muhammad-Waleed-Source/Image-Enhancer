import React from "react";

const ImagePreview = (props) => {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
      {/* Original Image */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <h2 className="text-xl font-semibold text-center bg-gray-800 text-white py-2">
          Original Image
        </h2>

        {props.uploaded ? (
          <img
            src={props.uploaded}
            alt=""
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center text-xl justify-center h-80 bg-gray-200">
            No Image Uploaded
          </div>
        )}
      </div>

      {/* Enhanced Image */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <h2 className="text-xl font-semibold text-center bg-blue-800 text-white py-2">
          Enhanced Image
        </h2>

        {props.enhanced ? (
          <img src="" alt="" className="w-full h-full object-cover" />
        ) : (
          <div className="flex items-center text-xl justify-center h-80 bg-gray-200">
            No Enhanced Image Uploaded
          </div>
        )}
      </div>
    </div>
  );
};

export default ImagePreview;
