import io from "socket.io-client";

let socket;

export const init = () => {
  console.log("sunucuya bağlanılıyor");
  socket = io("http://localhost:3001", {
    transports: ["websocket"],
  });

  socket.on("connect", () => console.log("sunucuya bağlantı gerçekleşti"));
};

export const send = (color) => {
  socket.emit("newColor", color); //emit fonksiyonu backenddeysek client a, client taysak backend e veri göndermeye yarar.
  //aldığı parametrelerden birincisi backend kanalı ismidir, ikincisi ise gönderilecek veridir
  //newColor kanalını backend üzerinde tanımladık
};

export const subscribe = (callback) => {
  //client üzerinden backend üzerindeki bir kanala abone oluyoruz
  socket.on("receive", (color) => {
    callback(color);
  }); //receive kanalını dinle, o kanaldan sana bir renk gelicek!
};
