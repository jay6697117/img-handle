function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    console.log('reader :>> ', reader);
    reader.readAsDataURL(file);
    reader.onload = () => {
      return resolve(reader.result);
    };
    reader.onerror = error => {
      return reject(error);
    };
  });
}

getBase64('./file.png').then(res=>{
  console.log('res :>> ', res);
});
