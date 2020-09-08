const dataURLtoFile = (dataURI: string) => {
  const splitDataURI = dataURI.split(",");
  const byteString =
    splitDataURI[0].indexOf("base64") >= 0
      ? atob(splitDataURI[1])
      : decodeURI(splitDataURI[1]);
  const mimeString = splitDataURI[0].split(":")[1].split(";")[0];

  const ia = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) ia[i] = byteString.charCodeAt(i);

  return new Blob([ia], { type: mimeString });
};

const makeFormData = (file: Blob, user: string) => {
  const formData = new FormData();
  const random = String(new Date().getTime());
  const fileName = user + random;
  formData.append("file", file, `${fileName}.png`);
  formData.append("user", user);

  return formData;
};

export { dataURLtoFile, makeFormData };
