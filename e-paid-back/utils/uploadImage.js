const cloudinary = require("../config/cloudinary");

async function uploadImageBuffer(buffer, mimetype, folder = "epaid/products") {
  const dataUri = `data:${mimetype};base64,${buffer.toString("base64")}`;

  const result = await cloudinary.uploader.upload(dataUri, {
    folder,
    resource_type: "image",
  });

  return {
    url: result.secure_url,
    publicId: result.public_id,
  };
}

module.exports = { uploadImageBuffer };
