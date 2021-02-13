const UserValidation = (values) => {
  const errors = {};

  if (!values.nama || values.nama === "") errors.nama = "Nama harus diisi";
  if (!values.alamat || values.alamat === "")
    errors.alamat = "Alamat harus diisi";
  if (!values.umur || values.umur === "") errors.umur = "Umur harus diisi";
  if (!values.notlp || values.notlp === "")
    errors.notlp = "No. tlp harus diisi";

  return errors;
};

export default UserValidation;
