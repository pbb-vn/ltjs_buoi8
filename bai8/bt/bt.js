// tao thu vien co thuoc tinh danhSachSach
let thuVien = {
  danhSachSach: [],

// phuong thuc them sach
themSach: function (tieuDe, tacGia, namXuatBan) {
  let sachMoi = {
    tieuDe: tieuDe,
    tacGia: tacGia,
    namXuatBan: namXuatBan,
    daMuon: false,
  };

  this.danhSachSach.push(sachMoi);
  console.log(`dã thêm sách: "${tieuDe}" vào thư viện.`);
  },

// phuong thuc tim sach
timSach: function (tieuDe) {
  let sachTimThay = this.danhSachSach.find(
    (sach) => sach.tieuDe.toLowerCase() === tieuDe.toLowerCase()
  );
  return sachTimThay || null;
  },

// phuong thuc muon sach
muonSach: function (tieuDe) {
  let sach = this.timSach(tieuDe);

  if (!sach) {
    console.log(`không tìm thấy sách tên: "${tieuDe}"`);
  } else if (sach.daMuon) {
      console.log(`sách "${tieuDe}" đã có người mượn`);
  } else {
      sach.daMuon = true;
      console.log(
        `mượn sách thành công: "${tieuDe}"`
      );
    };
  },
};

//test //

thuVien.themSach("ABC", "tacgia1", 2024);
thuVien.themSach("DEF", "tacgia2", 2025);

console.log("\n mượn sách");
thuVien.muonSach("ABC"); 
thuVien.muonSach("ABC"); 
thuVien.muonSach("GHI"); 
