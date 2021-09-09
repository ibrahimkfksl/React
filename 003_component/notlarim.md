COMPONENT OLUSTURMAK

- bir component olusturmak icin onu export etmek gerekiyor
- componentler bir kapsayicidan olusur
- component kullanilirken html etiketi gibi kullanilir

JSX NEDIR?

- jsx js uzantili dosyalarin html kodlarini anlamasi icindir. aslinda buradaki html kodlari javascript kodudur
- jsx olmadan da react yazilabilir
- ancak karmasikligi arttirir
- her komponent e react i dahil etmeye artik gerek yok
- sadece ayri bir ozellik kullanilirken import edilir ornegin hook
- fonskyon isimlerinin bas harflerini buyuk yazmak gerekir
- react bas harfi buyuk olanlar component bas harfi kucuk olanlar html etiketi olarak algilaniyor
- kapsayici olarak div yazmana gerek yok fragment kullanabilirsin <> </> seklinde
- ya da <React.fragment></React.fragment> kullanabilirsin
- jsx de class yok className var
- js de ozel tanimli ifadeler burada ayri isimlere sahip
- jsx de for yok htmlFor var
- bir degisken jsx icerisinde {} ile render edilebilir

KOSULLU RENDER

- <h1>{isLoggedIn && `Hosgeldin ${name}`}</h1>
- kosullu bir ifade bu sekilde saglanabilir -<h1>{isLoggedIn ? `Hosgeldin ${name}` : `Lutfen Giris Yapiniz`}</h1>
- bu sekilde ternary operator da kullanilabilir
- {friends ? <div>var</div> : <div>yok</div>}

PROPS NEDIR?

- componentlere parametre gecmek icin kullanilir
- <User name="Mehmet" surName="Demir" isLoggedIn={false}/> props a bu sekilde attribute yollanir
- false js attribute olarak yollanir
- sayi vs de suslu parantez icinde gonderilir
- stringler de bu sekilde gonderilebilir

PROP OLARAK ARRAY GECIP DONGUDE KULLANMA

- {props.friends.map((friend, index) => (
  <div key={index}>{friend}</div>
  ))}
- dongu kullanirken en distaki kapsayiciya key olarak bir sayi vermemiz gerekiyor, vermezsek de calisir, ancak bu sekilde performans kayiplarinin onune gecilmis oluyor
- ya da parametre gecicegin array i bir obje olarak tanimlayabilirsin ve tanimlarken tum elemanlara uniq bir sayi verebilirsin, mesela name attribute una ek olarak id koyabilirsin
- {props.friends.map((friend) => (
  <div key={friend.id}>{friend.name}</div>
  ))}
- {props.friends.map((friend) => {return (
  const id = 1
  <div key={friend.id}>{friend.name}</div>
  )}}
- donguler bu sekilde de olabilir bunun nedeni sadece tek bir eleman koymazsan diyelim ki bir islem daha kyoarsan bunu kullanmak zorundasin

PROP TYPES

- componentlere gonderilen proplarin tipplerini belirlemek icin kullanilir
  User.propTypes = {
  name: PropTypes.string.isRequired,
  surName: PropTypes.string,
  age: PropTypes.number,
  isLoggedIn: Boolean,
  };
  component icerisinde gelen props lari bu sekilde sinirlandirabiliriz
- isRequired ile alanin zorunlu oldugunu belirleyebiliriz

ONEOFTYPE

- bir property birden fazla tipde olabilirse bunun icin PropTypes.oneOfType kullanilir

SHAPE

- obje olarak gonderilen propslarla ilgili kisitlama yapmak icin kullanilir
  address: PropTypes.shape({
  title: PropTypes.string,
  zip: PropTypes.number,
  }),

DEFAULT PROPS

- varsayilan deger vermek icin kullanilir
  User.defaultProps = {
  isLoggedIn: false,
  };
- burada isLoggedIn gonderilmemisse varsayilan olarak false degerini alir
