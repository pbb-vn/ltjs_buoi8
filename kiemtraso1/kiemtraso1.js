let schoolSystem ={
  danhSach: [],
  soLuongHocSinh: 0,

  // khoi tao
  khoiTao: function (data=[]) {
    this.danhSach=data;
    this.soLuongHocSinh = data.length;
  },

  //them hoc sinh
  themHocSinh: function (hocSinh) {
    let nam=new Date().getFullYear();
    this.soLuongHocSinh++;

    let maHS="ma"+nam+ this.soLuongHocSinh;
    let newStudent={...hocSinh, maHS};
    this.danhSach.push(newStudent);
    return maHS;
  },

  // tim hoc sinh
  timHocSinh:function (maHS) {
    if (!maHS.startsWith("ma")) return null;
    return this.danhSach.find((hs) => 
      hs.maHS===maHS) || null;
  },

  // cap nhat thong tin
  capNhatThongTin:function (maHS, duLieuMoi) {
    let hs=this.timHocSinh(maHS);
    if (!hs) return false;

    delete duLieuMoi.maHS;
    Object.assign(hs,duLieuMoi);
    return true;
  },

  // xoa hoc sinh
  xoaHocSinh:function (maHS) {
    let index=this.danhSach.findIndex((hs) =>
       hs.maHS===maHS);
    if (index===-1) return false;

    this.danhSach.splice(index, 1);
    return true;
  },

  // danh sach theo lop
  layDanhSachTheoLop:function (tenLop) {
    return this.danhSach.filter((hs) =>
       hs.lopHoc===tenLop);
  },

  // thong ke hoc luc
  thongKeHocLuc:function () {
    let tk={xuatSac:0, gioi:0, kha:0, trungBinh:0, kem:0};
    this.danhSach.forEach((hs) => {
      if (hs.diemTB>=9.0) tk.xuatSac++;
      else if (hs.diemTB>=8.0) tk.gioi++;
      else if (hs.diemTB>= 6.5) tk.kha++;
      else if (hs.diemTB>=5.0) tk.trungBinh++;
      else tk.kem++;
    });
    return tk;
  },

  //sap xep theo diem tb
  sapXepTheoDiem:function (kieu="tang") {
    let copy=[...this.danhSach];
    return copy.sort((a, b) =>
      kieu==="tang" ?a.diemTB - b.diemTB:b.diemTB - a.diemTB
    );
  },
};
