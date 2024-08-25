import { asrielinter } from '../../../code/common';
import { toriCheck, toriSV } from '../../../code/outlands/extras';
import { game } from '../../../code/systems/core';
import {
   battler,
   choicer,
   iFancyYourVilliany,
   instance,
   outlandsKills,
   pager,
   postSIGMA,
   resetThreshold,
   roomKills,
   saver,
   world
} from '../../../code/systems/framework';
import { SAVE } from '../../../code/systems/save';
import { CosmosKeyed, CosmosProvider } from '../../../code/systems/storyteller';

// START-TRANSLATE

const toriel_aerialis = () =>
   SAVE.data.n.plot < 49
      ? [
           '<25>{#p/toriel}{#f/1}* Aerialis\'te bir çeşit sıvı olduğunu duydum...',
           '<25>{#f/0}* Elektirik yalıtımı için kullanılıyormuş.',
           '<25>{#f/1}* Bu sıvıyı taşıyabilseydin, ne kadar uzağa götürürdün?',
           '<25>{#f/1}* Onu Hisar\'a kadar taşır mıydın?',
           '<25>{#f/1}* Yoksa geri dönüşüm kutusuna atıp ondan kurtulur muydun?',
           '<25>{#f/0}* Ne kadar hayal kırıcı olurdu.'
        ]
      : SAVE.data.n.plot < 51
      ? world.bad_lizard > 1 || SAVE.data.n.state_foundry_undyne === 2
         ? [
              '<25>{#p/toriel}{#f/1}* Belki, bir gün öğretmen olursam...',
              '<25>{#f/0}* Kraliyet laboratuvarına bir gezi düzenleyebilirim.',
              "<25>{#f/0}* Dr. Alphys'in de izniyle, tabii.",
              '<25>{#f/1}* Orada kesin bir sürü ilginç deneyler yapıyorlardır...',
              "<25>{#f/0}* Çocuklar için harika bir öğrenme deneyimi olurdu."
           ]
         : [
              '<25>{#p/toriel}{#f/0}* Televizyon galanın lafı hızlıca yayılmış, küçüğüm!',
              '<25>{#f/0}* Tabi, ben göremedim, çünkü benim bir televizyonum yok.',
              '<25>{#f/1}* Duyduğumda, fakat, Şaşırmıştım doğrusu...',
              SAVE.data.n.state_aerialis_talentfails === 0
                 ? '<25>{#f/2}* Nasıl HİÇ hata yapmadın?'
                 : '<25>{#f/6}* Bu kadar \"muhteşem\" hareketlerin olduğunu bilmiyordum.'
           ]
      : SAVE.data.n.plot < 56
      ? [
           '<25>{#p/toriel}{#f/1}* Hmm...\n* Aerialis\'teki kraliyet muhafızları...',
           '<25>{#f/0}* Görünüşe göre en sevdikleri yemek... somon.',
           '<25>{#f/1}* Yoksa... dondurma mıydı?',
           '<25>{#f/2}* Dur, hayır, sanırım pizzaydı!',
           '<25>{#f/0}* Mütevazı kopyalayıcı olmadan bunların hepsi imkansız olurdu.',
           '<25>{#f/1}* Ve... Bunlar bu kadar yeni muhafızlar için tuhaf yiyecekler değil mi?'
        ]
      : SAVE.data.n.plot < 59
      ? [
           world.bad_lizard > 1 || SAVE.data.n.state_foundry_undyne === 2
              ? '<25>{#p/toriel}{#f/0}* Televizyona çıktığını duydum, küçüğüm.'
              : '<25>{#p/toriel}{#f/0}* Tekrar televizyona çıktığını duydum, küçüğüm.',
           '<25>{#f/1}* Ayrıca şok edici bir şey yaptığını da duydum...',
           iFancyYourVilliany()
              ? '<25>{#f/2}* Ve plastik patlayıcı yapmak için malzemeleri değiştirmişsin!'
              : SAVE.data.n.state_aerialis_crafterresult === 0
              ? '<25>{#f/2}* Ve patlama tehlikesine karşın direnmişsin!'
              : '<25>{#f/2}* Ve bir \"tek kullanımlık taşınabilir sırt roketini\" tek başına uçurmuşsun!',
           '<25>{#f/3}* ... sen...',
           '<25>{#f/4}* Hayatını tehlikeye atmaya mı ÇALIŞIYORDUN?'
        ]
      : SAVE.data.n.plot < 60
      ? [
           '<25>{#p/toriel}{#f/1}* Aerialis\'te ne tür bulmacalar var?',
           '<25>{#f/1}* Lazerli mi?',
           '<25>{#f/1}* Başarısız olduğunda seni başa atıyorlar mı?',
           '<25>{#f/1}* ... \"başarısız\" olunabilir mi ki?',
           '<25>{#f/0}* Hımm...\n*Bu kadar çok soru sorduğum için özür dilerim.',
           '<25>{#f/1}* Benim gibi bulmaca tutkunu biri bunları düşünmeden edemiyor...'
        ]
      : SAVE.data.n.plot < 61
      ? [
           '<25>{#p/toriel}{#f/1}* Mettaton\'la yaşadığın olayları duyunca...',
           '<25>{#f/0}* Aklıma bir şey geldi.',
           '<25>{#f/1}* YZ programlarının yasaklanmasından sonra onun gibi bir robot nasıl var olabilir?',
           '<25>{#f/5}* Elbette Dr. Alphys böylesine köklü bir kuralı ihlal etmemiştir.',
           '<25>{#f/0}* Hayır...\n* Başka bir açıklaması olmalı.'
        ]
      : SAVE.data.n.plot < 63
      ? [
           '<25>{#p/toriel}{#f/1}* Hmm...\n* Aerialis\'teki kraliyet muhafızları...',
           '<25>{#f/0}* Pozisyonlarına yeni terfi ettiklerini duydum.',
           '<25>{#f/1}* Ayrıca silah konusunda oldukça seçici olduklarını da duydum...',
           '<25>{#f/5}* Sunulan daha iyi seçeneklere rağmen bunları yükseltmeyi reddediyorlarmış.',
           '<25>{#f/0}* Silahlarını yükseltmelerini istediğimden değil de.',
           '<25>{#f/2}* Zaten senin için yeterince endişeleniyorum!'
        ]
      : SAVE.data.n.plot < 65
      ? SAVE.data.b.a_state_hapstablook
         ? [
              '<25>{#p/toriel}{#f/1}* Bir hayalet, Lurksalot, bazı aile işlerinden bahsetti.',
              '<25>{#f/5}* Görünüşe göre bir süredir akıllarındaymış.',
              '<25>{#f/0}* Neyse ki bunun yakında çözüleceğini söyledi.',
              '<25>{#f/1}* Senin yardımınla hem de, değil mi?',
              '<25>{#f/0}* Peki o zaman.\n* Seninle gurur duyuyorum, küçüğüm.'
           ]
         : [
              '<25>{#p/toriel}{#f/1}* Bir hayalet, Lurksalot, bazı aile işlerinden bahsetti.',
              '<25>{#f/5}* Görünüşe göre bir süredir akıllarındaymış.',
              '<25>{#f/1}* Kuzeninin senden yardım istemeye çalıştığını söyledi ama...',
              '<25>{#f/5}* O ara müsait değilmişsin.',
              '<25>{#f/1}* ... iyi bir nedenin vardı, değil mi?'
           ]
      : SAVE.data.n.plot < 66
      ? [
           '<25>{#p/toriel}{#f/1}* Bir robotun bu kadar güzel bir sese sahip olabileceğini kim bilebilirdi?',
           "<25>{#f/0}* Mettaton'un yeni kaydını duyunca kulaklarıma inanamadım.",
           '<26>{#f/1}* Yine de bazı şarkı sözleri bana göre biraz... şiddetliydi.',
           '<25>{#f/5}* ...',
           '<25>{#f/0}* Merak etme çocuğum.\n*Kimse seni uzaya atmayacak.'
        ]
      : SAVE.data.n.plot < 68
      ? [
           '<25>{#p/toriel}{#f/0}* Sans bana \"eğ merkezinin\" sevdiği bir yer olduğunu söyledi.',
           '<25>{#p/toriel}{#f/1}* Sanat dersleri, müzik kulüpleri, kütüphaneler...',
           '<25>{#p/toriel}{#f/5}* Bölgenin büyük kısmının küçük çocuklar için tehlikeli olması çok yazık.',
           '<25>{#p/toriel}{#f/3}* Misafirperver olmak için biraz daha çaba gösteremezler miydi?',
           '<25>{#p/toriel}{#f/2}* O medyumlar değerli, dönüştürücü deneyimler sunabilir!'
        ]
      : SAVE.data.n.plot < 70
      ? world.bad_robot
         ? [
              '<25>{#p/toriel}{#f/0}* Tanıdığım herkes \"büyük finalin\" iptal edilmesinden dolayı üzgün.',
              '<25>{#p/toriel}{#f/0}* Güzel bir mücadele olabileceğini söylüyorlardı.',
              '<25>{#p/toriel}{#f/1}* Böyle bir savaşa girişmek zorunda olmadığın için rahatlasam da...',
              '<25>{#p/toriel}{#f/5}* Sırada seni nelerin beklediği konusunda endişelenmeden edemiyorum.'
           ]
         : SAVE.data.b.killed_mettaton
         ? [
              '<25>{#p/toriel}{#f/0}* Tanıdığım herkes \"büyük final\"den bahsediyor.',
              '<25>{#p/toriel}{#f/1}* Mettaton\'un şovu için canını verdiğini söylüyorlar...',
              '<25>{#p/toriel}{#f/0}* Ama ben öyle düşünmüyorum.',
              '<25>{#p/toriel}{#f/1}* Sonuçta robotlar tamir edilebilir, değil mi?'
           ]
         : [
              '<25>{#p/toriel}{#f/0}* Tanıdığım herkes \"büyük final\"den bahsediyor.',
              '<25>{#p/toriel}{#f/0}* Seni ve Mettaton\'u izlemenin onları gerçekten mutlu ettiğini söylüyorlar.',
              '<25>{#p/toriel}{#f/1}* İyi vakit geçirdiğini görmek beni mutlu etse de...',
              '<25>{#p/toriel}{#f/5}* Sırada seni nelerin beklediği konusunda endişelenmeden edemiyorum.'
           ]
      : [
           '<25>{#p/toriel}{#f/1}* İyi vakit geçirdiğinize sevindim ama...',
           '<25>{#p/toriel}{#f/5}* Muhtemelen şimdiye Hisar\'a varmışsındır.',
           '<25>{#p/toriel}{#f/9}* ...',
           "<25>{#p/toriel}{#f/10}* Dikkatli ol, tamam mı?"
        ];

export default {
   a_outlands: {
      darktorielcall: [
         '<26>{#p/toriel}{#f/5}* Özür dilerim küçüğüm.\n* Telefonumu tekrardan kapattım.',
         '<25>{#p/toriel}{#f/9}* Lütfen beni şimdilik burada bırak.',
         '<25>{#p/toriel}{#f/10}* Zamanı gelince sana ve diğerlerine döneceğim.'
      ],
      secret1: () => [
         '<32>{#p/basic}* Burada bir kapı var.\n* Kilitli.',
         ...(SAVE.data.b.oops ? [] : [ "<32>{#p/basic}* Belki bir yerlerde bir anahtar vardır...?" ])
      ],
      secret2: [ '<32>{#p/human}* (Gizli Anahtarı kullandın.)' ],
      exit: () => [ choicer.create('* (Outlands\'den çıkacak mısın?)', 'Evet', 'Hayır') ],
      nosleep: [ '<32>{#p/human}* (Bir şey uykunu bölmüş gibi görünüyor.)' ],
      noequip: [ '<32>{#p/human}* (Kullanmamaya karar verdin.)' ],
      finaltext: {
         a: [ "<32>{#p/basic}* Buralarda bir yerlerde olmalı..." ],
         b: [ '<32>{#p/basic}* Ha...?', '<32>{#p/basic}* Oradaki...\n* O mu?' ],
         c: [
            "<32>{#p/basic}* ... bu o.",
            "<32>* ...\n* Frisk, eğer hazırsan...",
            "<32>* Görmek istediğiniz herkesi gördüysen...",
            '<32>* ...',
            '<32>* Yapman gerekeni biliyorsun.',
            "<32>* Yoksa sen hazır olana kadar bekleyeceğim."
         ],
         d1: [ '<32>{#p/basic}* Asriel.' ],
         d2: [ '<25>{#p/asriel1}{#f/13}* ... Frisk?\n* Sen misin?' ],
         d3: [ "<32>{#p/basic}* Asriel, benim...", '<32>{#p/basic}* En iyi arkadaşın, hatırladın mı?' ],
         d4: [
            '<25>{#p/asriel1}{#f/25}* ...!\n',
            '<25>{#f/25}* $(name)...?\n',
            "<25>{#f/13}* Ama... sen...",
            "<25>{#f/23}* ... sen..."
         ],
         d5: [ '<32>{#p/basic}* Ölü müyüm?' ],
         d6: [
            '<32>{#p/basic}* Heh.\n* Uzun bir süre... bir parçam öyle olmayı diledi.',
            '<32>{#p/basic}* Sana yaptıklarımdan sonra, ben...\n* Bunu hak ettiğimi hissettim.'
         ],
         d7: [ "<25>{#p/asriel1}{#f/7}* Öyle deme, $(name)!", "<25>{#f/6}* ... hatalısın!" ],
         d8: [
            '<33>{#p/basic}* Haha... Diyene bak.\n* Bay \"git seni seven insanlarla birlikte ol.\"',
            '<32>* Ama benim hakkımdaki gerçeği bilmeyi hak ediyorsun Asriel...',
            '<32>* Her şey hakkında.'
         ],
         d9: [ '<25>{#p/asriel1}{#f/23}* ...', '<25>{#f/23}* $(name)...' ],
         d10: [ '<25>{#p/asriel1}{#f/13}* Ama...', '<25>{#f/15}* Sen hala nasıl...' ],
         d11: [
            '<32>{#p/basic}* ... fark eder mi?',
            '<32>* Orada yaptığın gibi beni unutmakta haklıydın.',
            "<32>* Doğrusu ben berbat biriydim...",
            "<32>* Ve ben, sahip olmayı dilediğin arkadaş ya da kardeş olamadım."
         ],
         d12: [ '<25>{#p/asriel1}{#f/13}* $(name), Ben...' ],
         d13: [ "<32>{#p/basic}* Sorun değil Asriel.", "<32>* Olduğundan daha iyi olmaya çalışmana gerek yok." ],
         d14: [ '<25>{#p/asriel1}{#f/22}* ...', '<25>{#f/22}* ... neden ki?' ],
         d15: [
            '<32>{#p/basic}* Yani...',
            '<32>* Her zaman insanlığın kurtuluşun ötesinde olduğunu düşündüm.',
            '<32>* Ve, ne olursa olsun...',
            '<32>* Eğer insansan... karanlığa düşmeye mahkum olduğunu.',
            '<32>* Ama Frisk\'i yolculuğu boyunca takip ettikten sonra...',
            '<32>* Gerçeği anladım.',
            '<32>* Diğer insanlar... her zaman bu gerçeği görmezden gelmeyi kolaylaştıran bir şeyler yaptılar.',
            "<33>* Millete saldırırlardı veya daha kötüsü onları... yok ederlerdi.",
            '<32>* Ama Frisk hariç.',
            '<32>* Karşılaştıkları zorluklar ne olursa olsun, her fırsatta nezaket ve merhamet gösterdiler.',
            '<32>* Beni... haksız çıkardılar.',
            "<32>* Ve şimdi bu yüzden sana davranış şeklimin hiçbir mazereti olmadığını biliyorum.",
            '<32>* Yaşadığın her şeyin, kaybettiğin her şeyin...',
            "<32>* Suçlusu benim."
         ],
         d16: [ '<25>{#p/asriel1}{#f/13}* $(name)...', '<25>{#f/15}* Bunca zamandır bilinçli miydin?' ],
         d17: [
            '<32>{#p/basic}* ... evet.\n* Sanırım öyleydim.',
            '<32>* Ben böyle yaşadım, Asriel...\n* Öldüğümüzden beri.',
            "<32>* Ve... sana söylemem gereken bir şey daha var."
         ],
         d18: [ '<25>{#p/asriel1}{#f/21}* Neymiş bakalım?' ],
         d19: [
            '<32>{#p/basic}* Güç kalkanını birlikte geçtiğimiz zamanı hatırlıyor musun?',
            '<32>* Eski dünyanın harabelerine vardığımız, ve o insanlar tarafından bulunduğumuz zaman?\n',
            '<32>* Gücümüzü onları yok etmek için kullanmak istemiştim... ama sen beni durdurmuştun, hatırladın mı?'
         ],
         d20: [ '<25>{#p/asriel1}{#f/16}* ... evet.' ],
         d21: [
            "<32>{#p/basic}* O zaman anlamamıştım ama...",
            '<32>* Şimdi anlıyorum.',
            '<32>* ... sen sadece beni... korkunç bir hata yapmaktan alıkoymaya çalışıyordun.'
         ],
         d22: [ '<25>{#p/asriel1}{#f/15}* $(name)...' ],
         d23: [
            "<32>{#p/basic}* Eğer sen olmasan, karakol ikinci bir savaşta yok edilirdi.",
            '<32>* Eğer sen olmasaydın, güya kurtarmaya çalıştığım canavarlar...',
            '<32>* ... bizimle birlikte ölürdü.'
         ],
         d24: [ '<25>{#p/asriel1}{#f/25}* $(name), Ben...' ],
         d25: [
            '<32>{#p/basic}* Şimdi bile o zamanki kararın hala önemli.',
            '<32>* Şimdi bile...',
            "<32>* Benden daha iyi bir kardeşsin."
         ],
         d26: [
            '<25>{#p/asriel1}{#f/25}* Seni affediyorum, $(name)!',
            "<25>{#f/23}* Tamam mı?\n*Bunu yapmak zorunda değilsin...",
            '<25>{#f/22}* O zamanlar ne kadar güçlü hissettiğini biliyorum ve...',
            "<25>{#f/15}* Sırf benim için fikrini değiştirmeni..."
         ],
         d27: [
            '<32>{#p/basic}* Hayır.\n* Artık değil.',
            '<32>* İnsanlar değişebilir, Asriel...',
            "<32>* Her zaman inandığın şey bu değil miydi?"
         ],
         d28: [ '<25>{#p/asriel1}{#f/13}* ... Hala inanıyorum.' ],
         d29: [
            "<32>{#p/basic}* Son yüz yılı kendimi küçük görerek geçirdim.",
            "<32>* Son yüz yılı asla beslememem gereken bir kin besleyerek geçirdim.",
            '<32>* O sırada beni neyin hayatta tuttuğunu merak ettim...',
            '<32>* Ve artık nihayet cevabı biliyorum.'
         ],
         d30: [ '<25>{#p/asriel1}{#f/15}* ...?' ],
         d31: [ "<32>{#p/basic}* ... o sendin Asriel.", "<32>* Beni hayatta tutan sendin." ],
         d32: [
            '<32>{#p/basic}* Bunu... yerine getirilmemiş bir söz gibi düşünün.',
            '<32>* O kini tutmak... seni düşündüğüm gibi düşünmek...',
            "<32>* Senin için olabileceğimden daha fazlası olabileceğimi düşünmek...",
            "<32>* Bunca zamandır beni durduran şey oydu."
         ],
         d33: [ '<25>{#p/asriel1}{#f/23}* $(name)...' ],
         d34: [ '<32>{#p/basic}* Asriel.\n* Kardeşim.', '<32>* Gerçeği bilmeyi hak ediyorsun.' ],
         d35: [ '<25>{*}{#p/asriel1}{#f/25}* Ha?\n* Ama sen zaten- {%}' ],
         d36: [ '<32>{#p/basic}* Ben de seni affediyorum.' ],
         d37: [ '<25>{#p/asriel1}{#f/30}{#i/4}* ...!', '<25>{#p/asriel1}{#f/26}{#i/4}* $(name)...' ],
         d38: [ '<32>{#p/basic}* Şşt...', "<32>* Sorun değil.", "<32>* Seninleyim, tamam mı?" ],
         d39: [ '<25>{#p/asriel1}{#f/25}{#i/4}* Ben...\n' ],
         d40: [ "<32>{#p/basic}* Seninleyim, Asriel.\n" ],
         d41: [
            '<32>{#p/basic}* ... Hissedebiliyorum.\n',
            '<32>* Aradan yüz yıl geçmesine rağmen...',
            "<32>* Hala orada, değil mi?",
            '<32>* Küçük bir melek gibi...',
            '<32>* Beni kolluyor, beni kendi kötü seçimlerimden koruyor...',
            '<32>* ... bir gün ona iyiliğimin karşılığını verebilmem için.'
         ],
         d42: [ "<32>{#p/basic}* Artık hepsi anlamlı geliyor.", '<32>* Ne yapmam gerektiğini biliyorum.' ],
         d43: [ '<32>* Ne yapmam gerektiğini biliyorum.' ],
         d44: [ '<25>{*}{#f/25}* Hayır...!{^60}{%}', '<25>{*}{#f/26}* B... bırak beni!{^60}{%}' ],
         d45: [ '<32>{*}{#p/basic}* Heh...{^60}{%}', '<32>{*}* ... benim için annemle ve babama göz kulak ol, tamam mı?{^60}{%}' ],
         d46: [ '<25>{#p/asriel1}{#f/25}* Frisk, orada mısın?', '<25>{#f/22}* Lütfen... uyan...' ],
         d47: [ "<25>{#p/asriel1}{#f/23}* Ben...\n*Ben de seni kaybetmek istemiyorum..." ],
         d48: [ '<25>{#p/asriel1}{#f/17}* ... işte buradasın.' ],
         d49: [
            "<25>{#p/asriel1}{#f/23}* Ha... Bir an seni kaybettiğimi sandım.",
            "<25>{#f/22}* Beni bir daha böyle korkutma, tamam mı?",
            '<25>{#f/13}* ...'
         ],
         d50: [
            '<25>{#p/asriel1}{#f/13}* Pekala...\n* Artık RUHUM yeniden içimde.',
            '<25>{#f/15}* Gerçek olan.',
            '<25>{#f/16}* ...',
            "<26>{#f/16}* $(name) ve ben öldüğümüzde, kendisini çevreme sarmış olsa gerek ki...",
            '<25>{#f/13}* ... buraya sağ salim geri getirilebilmiştim.',
            '<26>{#f/17}* Bunca zaman boyunca sırf beni görmebilmek için dayandı, Frisk...',
            '<25>{#f/13}* ... yani en azından onu onurlandırabilirim.',
            '<25>{#f/15}* Her zaman yaşamamı istedikleri hayatı yaşarım.'
         ],
         d51: [
            '<25>{#p/asriel1}{#f/23}* ... Frisk.',
            "<25>{#f/23}* Bundan sonra seninle kalacağım.",
            "<25>{#f/17}* Nereye gidersen git... Seni takip edeceğim.",
            '<25>{#f/13}* Böyle konularda...\n* Sana güvenebileceğimi hissediyorum.',
            "<25>{#f/13}* Birbirimiz hakkında pek bir şey bilmesek bile.",
            "<25>{#f/15}* ... Bilmiyorum.",
            '<25>{#f/15}* ...',
            '<25>{#f/13}* Frisk... bundan gerçekten emin misin?',
            "<25>{#f/13}* Seni, arkadaşlarını incittiğim tüm zamanlar...",
            "<25>{#f/22}* Bu... şu anda düşünebildiğim tek şey bu.",
            '<25>{#f/21}* Onların bu şekilde öldüğünü aklımda tekrar tekrar görmek...',
            "<25>{#f/22}* Bunu yapanın ben olduğumu bile bile hem de.",
            '<25>{#f/15}* ...',
            '<25>{#f/15}* Böyle birinin yanında olabileceğinden gerçekten emin misin?',
            '<32>{#p/human}* (...)',
            '<25>{#p/asriel1}{#f/15}* ...',
            "<25>{#f/17}* ... sanırım seni anlamıyorum Frisk.",
            "<25>{#f/23}* Sana ne yaparsam yapayım... pes etmiyorsun.",
            '<25>{#f/22}* ...',
            "<25>{#f/13}* Hey.\n* Belki de o kadar fena olmaz.",
            "<25>{#f/17}* Yanımda olman kesinlikle sorun yaratmaz.",
            '<25>{#f/13}* ...\n* Mesele şu ki...\n* Eğer şimdi burada kalsaydım...',
            "<25>{#f/15}* $(name) için doğru olmazdı... bilirsin ya?\n",
            '<25>{#f/13}* Hem de, RUH\'um tekrar içimdeyken...',
            "<25>{#f/13}* Tekrardan yıldıza dönmem.",
            "<25>{#f/13}* Yani... burada kalmamın bir anlamı yok."
         ],
         d52: [
            '<25>{#p/asriel1}{#f/17}* Peki.\n* Artık gitsen iyi olur.',
            '<25>{#f/20}* Arkadaşların muhtemelen şu anda senin için çok endişeleniyorlardır.'
         ],
         e1: [
            '<25>{#p/asriel1}{#f/15}* ...',
            "<25>{#f/16}* Bundan sonra $(name) ne yapacak bilmiyorum.",
            "<25>{#f/13}* Beni görme şansı için beklediler ama bu...",
            '<25>{#f/15}* ... artık geçmişte kaldı.'
         ],
         e2: [
            "<25>{#p/asriel1}{#f/13}* Onca zaman sırf beni görmek için beklediğine hala inanamıyorum...",
            '<25>{#f/23}* İnatçı salak.',
            '<25>{#f/17}* ... eğer hala konuşan bir yıldız olsaydım böyle söylerdim.',
            "<25>{#f/13}* Ama... Onun gerçekten bir aptal olduğunu düşünmüyorum."
         ],
         e3: [
            "<25>{#p/asriel1}{#f/13}* $(name) aptal değil.\n* Ve ben...",
            '<25>{#f/13}* Kendisi hakkında söylediklerinin çoğuna katılıyorum...',
            '<25>{#f/15}* Sahip olmayı dilediğim türden bir arkadaş olmadıklarına...',
            "<25>{#f/7}* ... ama bu onun gitmesini istediğim anlamına gelmiyor!"
         ],
         e4: [
            "<25>{#p/asriel1}{#f/13}* $(name)'in gitmesi gerekmiyor ya...",
            "<25>{#f/17}* İsterse bizimle kalabilir.\n* Kalmasını isterim.",
            "<25>{#f/15}* Ama gitmek isterse anlarım.",
            '<25>{#f/16}* Oyununu \"kazandı\".\n* Artık benimle \"oynamak\" istemezler.'
         ],
         e5: [
            "<25>{#p/asriel1}{#f/13}* ... $(name)...\n* Eğer hala oradaysan, dinliyorsan...",
            '<25>{#f/15}* Seni sevdiğimi bilmeni istiyorum.',
            '<25>{#f/23}* En harika insan olmayabilirsin...',
            '<25>{#f/22}* Ama içten içe hala beni önemsiyordun.'
         ],
         e6: [
            '<25>{#p/asriel1}{#f/23}* Ha...',
            '<25>{#f/22}* Şu anda muhtemelen deli biri gibi görünüyorum.',
            '<25>{#f/15}* Çoktan unutmam gereken birine takıyorum...',
            '<26>{#f/17}* ... sanırım $(name) ve ben gerçekten sadece bir çift inatçı aptalız.'
         ],
         e7: [
            '<25>{#p/asriel1}{#f/13}* Bir keresinde $(name) ve ben bir yatak için kavga ediyorduk...',
            "<25>{#f/10}* Çünkü ikimiz de yanında komidin olanı istiyorduk.",
            '<26>{#f/15}* İkimiz de birbirimizi kenara itip yer açmaya çalışıyorduk...',
            '<25>{#f/4}* Bütün bu curcuna bizi o kadar yordu ki uyuyakaldık.',
            '<25>{#f/13}* Ama uyandığımızda...',
            '<25>{#f/17}* Yan yana uzanıyorduk.',
            "<25>{#f/13}* Kalkmaya çalıştım ama... bırakmak istemedi.",
            '<26>{#f/15}* Sayıklayıp duruyordu.',
            '<25>{#f/15}* \"...sıcak...\"',
            '<25>{#f/15}* \"... kabarık...\"',
            '<25>{#f/20}* Normalde rahatsız olurdum ama...',
            "<25>{#f/17}* ... o esnada kavga etmediğimiz için mutluydum."
         ],
         e8: [
            '<25>{#p/asriel1}{#f/13}* Bir keresinde de $(name) ve ben annem ve babam için akşam yemeği hazırlıyorduk.',
            '<25>{#f/15}* Hep daha baharatlı yapmak istedi...',
            '<25>{#f/3}* Dürüst olmam gerekirse eğer şimdi isteseydi şikayet etmezdim.',
            '<25>{#f/20}* Şu anda baharatlı bir şeyler yiyebilirim.',
            '<25>{#f/13}* Ama o zamanlar tatlılara daha çok düşkündüm.\n* Çoğu canavar öyledir.',
            '<25>{#f/15}* Sonunda karıştırma kabıyla halat çekme oyunu oynadık ve...',
            '<25>{#f/20}* Nasıl sonuçlandığını hayal edebiliyorsundur.',
            '<25>{#f/17}* Annem bize pisliği temizlettirdi elbette.',
            '<25>{#f/13}* Sonra babam bizi yemeğe çıkardı ve ikimiz de istediğimizi aldık.'
         ],
         e9: [
            "<25>{#p/asriel1}{#f/15}* $(name) ve ben...\n* Sanki hiçbir konuda anlaşamıyorduk gibi...",
            '<25>{#f/20}* Birlikte vakit geçirmek dışında yani.',
            '<26>{#f/17}* Farklılıklarımıza rağmen $(name) ve ben gerçekten ayrılamazdık.',
            "<25>{#f/13}* Ölümün kendisi bile bizi sonsuza kadar ayıramazdı."
         ],
         e10: [
            "<25>{#p/asriel1}{#f/17}* ... sence hala burada mı, Frisk?",
            '<25>{#f/17}* Bizi şu anda izliyor bile olabilir.',
            "<25>{#f/23}* Harika olmaz mıydı?",
            "<25>{#f/22}* Ama kesin olarak bilmek imkansız."
         ],
         e11: [
            "<25>{#p/asriel1}{#f/17}* Vay canına.\n* Seninle kalacak biri için...",
            "<25>{#f/20}* Kesinlikle $(name) ile olmayı tercih ediyormuşum gibi konuşuyorum.",
            "<25>{#f/13}* Ama... hiç de öyle değil.",
            "<25>{#f/17}* Eskiden tanıdığım birini yad etmeden edemiyorum."
         ],
         e12: () => [
            '<25>{#p/asriel1}{#f/17}* Frisk...\n* Bilmeni istiyorum ki...',
            '<25>{#f/13}* Sayende...',
            '<25>{#f/23}* Yeniden bir geleceğim varmış gibi hissediyorum.',
            '<25>{#f/22}* ...',
            ...(!SAVE.flag.b.pacifist_marker_forgive
               ? [ "<25>{#f/22}* Yaptığım şey için beni affedemesen de..." ]
               : SAVE.flag.n.killed_sans > 0
               ? [ '<25>{#f/22}* Bütün o korkunç şeyleri yapmanı istesem de...' ]
               : [ '<25>{#f/22}* Sana işkence etsem ve sevdiğin herkesi tehdit etsem de...' ]),
            "<25>{#f/13}* Her şeyi aşmam için hala bana yardım etmeye çalışıyorun.",
            '<25>{#f/23}* ... bu benim için çok şey ifade ediyor.',
            '<25>{#f/22}* ...',
            '<25>{#f/13}* Annem, babam...',
            '<25>{#f/13}* Sans, Papyrus, Undyne, Alphys...',
            "\n<25>{#f/15}* Geçmişte öldürdüğüm herkes...",
            "<25>{#f/16}* ... onlarla yüzleşmek benim için zor olacak.",
            '<25>{#f/13}* ...',
            "<25>{#f/17}* Ama deneyeceğim.",
            "<25>{#f/23}* Daha iyi biri olmaya çalışacağım.",
            '<25>{#f/22}* Ve eğer bir gün işi batırırsam...',
            "<25>{#f/13}* ... toplarlamama yardım etmek için orada olacağını biliyorum."
         ],
         e13: [
            '<25>{#p/asriel1}{#f/17}* Ha... $(name).',
            "<25>{#f/23}* Seni hayal kırıklığına uğratmayacağım, tamam mı?",
            "<25>{#f/22}* Bana verdiğin bu şanstan en iyi şekilde yararlanacağım.",
            "<25>{#f/17}* Verdiğine değecek."
         ]
      },
      evac: [ '<32>{#p/human}* (Yakındaki canavar varlığının azaldığını hissettin.)' ],
      stargum1: () =>
         SAVE.data.b.svr
            ? [
                 '<32>{#p/human}* (Çizgi romana bantlanmış bir parça sakız gördün...)',
                 choicer.create('* (Sakızı çiğneyecek misin?)', 'Evet', 'Hayır')
              ]
            : [
                 '<32>{#p/basic}* Çizgi romanın üzerine bantlanmış bir parça sakız vardı.',
                 choicer.create('* (Sakızı çiğneyecek misin?)', 'Evet', 'Hayır')
              ],
      stargum2: [ '<32>{#p/human}* (Çiğnememeye karar verdin.)' ],
      stargum3: [ '<32>{#p/human}* ($(x) CAN yeniledin.)' ],
      stargum4: [ '<32>{#p/human}* (CANIN tamamen yenilendi.)' ],
      fireplace1: () =>
         SAVE.data.b.svr
            ? [
                 '<32>{#p/human}* (Şöminenin davetkar sıcaklığını hissettin...)',
                 choicer.create('* (İçeriye doğru sürünecek misin?)', 'Evet', 'Hayır')
              ]
            : [
                 SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                    ? '<32>{#p/basic}* Sıradan bir şömine.'
                    : "<32>{#p/basic}* Toriel'in şöminesi.\n* Çok sıcak değil, sadece hoşça ılık.",
                 ...(world.darker
                    ? []
                    : [ '<32>* Muhtemelen içeri girebilirsin.', choicer.create('* (İçeriye doğru sürünecek misin?)', 'Evet', 'Hayır') ])
              ],
      fireplace2a: [ '<32>{#p/human}* (İçeri girmemeyi seçtin.)' ],
      fireplace2b: () => [
         '<32>{#p/human}* (Şömineye girdin ve sıcaklığının seni içine almasına izin verdin.)',
         '<32>{#p/human}* (Çok rahatsın.)',
         ...(SAVE.data.b.svr
            ? asrielinter.fireplace2b++ < 1
               ? [ "<25>{#p/asriel1}{#f/13}* Senin, ah, çıkmanı bekleyeceğim." ]
               : []
            : world.goatbro && SAVE.flag.n.ga_asrielFireplace++ < 1
            ? [ "<25>{#p/asriel1}{#f/13}* Senin, ah, çıkmanı bekleyeceğim..." ]
            : [])
      ],
      fireplace2c: [ "<25>{#p/toriel}{#f/1}{#npc/a}* Orada çok uzun süre kalma..." ],
      fireplace2d: [ '<32>{#p/basic}* ...', '<32>* Bu iyi.' ],
      noticereturn: [ '<25>{#p/asriel2}{#f/10}* Burada kaçırdığın bir şey mi var?' ],
      noticestart: [
         '<25>{#p/asriel2}{#f/3}* Ah, her şeyin başladığı yer.',
         "<25>{#p/asriel2}{#f/4}* O zamandan bu yana kesinlikle yol kat ettik, değil mi $(name)?"
      ],
      noticedummy: [ '<25>{#p/asriel2}{#f/3}* ...', "<25>{#p/asriel2}{#f/10}* Daha önce burada bir kukla yok muydu...?" ],
      afrog: {
         a: [
            '<32>{#p/basic}{#n1}* Aramızda kalsın...',
            '<32>* Biraz önce o keçi kadının buradan geçerken gördüm.',
            '<32>* Yiyecekleri vardı, ben de ona onların ne için olduğunu sordum ve...',
            "<32>* Belli ki ziyafet çekeceksin."
         ],
         b: () =>
            SAVE.data.n.plot === 72
               ? [
                    '<32>{#p/basic}{#n1}* Aramızda kalsın...',
                    '<32>* Biraz önce o keçi kadının buradan geçtiğini gördüm.',
                    '<32>* \"Korkularıyla yüzleşmenin\" zamanının geldiğini söyledi.',
                    "<32>* Her ne yaptıysa kesin bir şeye yol açtı!\n* Artık hepimiz özgürüz!"
                 ]
               : SAVE.data.n.plot === 71.2
               ? [
                    '<32>{#p/basic}{#n1}* Onu gördün mü?\n* Daha az önce buradaydı!',
                    '<32>* \"Korkularıyla yüzleşmenin\" zamanının geldiğini söyledi.',
                    '<32>* Acaba ne demek istemiş olabilir...?\n* Kararlı görünüyordu.'
                 ]
               : SAVE.data.b.w_state_lateleave
               ? [
                    '<32>{#p/basic}{#n1}* Aramızda kalsın...',
                    '<32>* Az önce o keçi kadının taksiyle süpermarkete gittiğini gördüm.',
                    "<32>* Süt almaya gideceğini söyledi ama hala dönmedi...",
                    "<32>* Umarım iyidir."
                 ]
               : [
                    '<32>{#p/basic}{#n1}* Aramızda kalsın...',
                    "<32>* Bazen yalnız kaldığımda markete taksiyle gitmeyi seviyorum.",
                    "<32>* İlginç, küçük bir dükkan ama satın alınacak bir sürü şey var.",
                    "<32>* Belki bir ara seni oraya götürürüm... kesin bayılırsın!"
                 ],
         c: () =>
            SAVE.data.n.plot === 72
               ? [
                    '<32>{#p/basic}{#n1}* Aramızda kalsın...',
                    "<32>* İlk başta hepimizi nasıl dövdüğünden hoşlanmadım.",
                    '<32>* Hepimiz çok korkmuştuk ve kafamız karışmıştı...',
                    '<32>* ... en azından sonunda iyi bir şey yaptın.'
                 ]
               : [
                    '<32>{#p/basic}{#n1}* Aramızda kalsın...',
                    "<32>* Dövdüğün insanlar bundan memnun değil.",
                    "<32>* Mesai saati dışında olduğuma sevin...\n* Çünkü aksi halde...",
                    "<32>* Kelleni alırdım."
                 ],
         d: [ '<32>{#p/basic}{#n1}* Hayır... hayır!', '<32>* U-uzak dur benden!' ]
      },
      asriel0: [
         "<25>{#p/asriel2}{#f/5}* ... ama sorun değil, zamanında orada olacağını biliyorum!",
         "<25>{#p/asriel2}{#f/1}* Beni hayal kırıklığına uğratmak istemezsin, değil mi?"
      ],
      asriel1: () =>
         [
            [
               "<25>{#p/asriel2}{#f/2}* Kusura bakma, birini aramak için Toriel'in telefonunu kullanmak zorunda kaldım.",
               "<25>{#p/asriel2}{#f/1}* Merak etme...\n* Nedenini yakında öğreneceksin.",
               "<25>{#p/asriel2}{#f/2}* ... hih hih hii.\n* İleride seni bekliyor olacağım."
            ],
            [ "<25>{#p/asriel2}{#f/4}* İleride seni bekliyor olacağım." ],
            [ '<25>{#p/asriel2}{#f/3}* ...' ]
         ][Math.min(SAVE.flag.n.ga_asrielNegative1++, 1)],
      asriel2: () => [
         '<25>{#p/asriel2}{#f/1}* Hazır mısın, $(name)?',
         "<25>{#f/2}* 'Çünkü bir kez gittiğimizde, geri dönüş yok.",
         choicer.create('* (Onu takip edecek misin?)', 'Evet', 'Hayır')
      ],
      asriel2b: () => [ '<25>{#p/asriel2}{#f/1}* Hazır mısın?', choicer.create('* (Onu takip edecek misin?)', 'Evet', 'Hayır') ],
      asriel3: [ '<25>{#p/asriel2}{#f/2}* Tamam...', "<25>{#f/1}* Haydi şunu yapalım." ],
      asriel4: [ "<25>{#p/asriel2}{#f/4}* Bekliyor olacağım o halde." ],
      asrielDiary: [
         [
            '<32>{#p/human}* (İlk sayfayı açtın... Kelimeleri zar zor çıkarabiliyorsun.)',
            '<32>{#p/asriel1}{#v/2}* \"bi gümrük yazmaya başladım çünkü anem eylenceli olur dedi.\"',
            '<32>* \"bugün babamın baçesine nasıl tohum ekeceyimi örendim\"',
            '<32>* \"yakında büyüyeceyni söylüyo ama uzun sürcekmiş.\"',
            '<32>* \"anem bu akşam saylangoz turtası yapcak çok heycanlıyım\"',
            '<32>* \"onun dışında günüm güzel geçiyo.\"'
         ],
         [
            '<32>{#p/human}* (İkinci sayfaya geçtin...)',
            '<32>{#p/asriel1}{#v/2}* \"azzynin gümrüğü, k-504\"',
            '<32>* \"anem tarihi yazmamı söledi ki milet ne zaman yazdıyımı bilsin.\"',
            '<32>* \"yıldız çiçeyim daha büyümedi ama babam yakında büyür diyo\"',
            '<32>* \"keşke odamda bi pencere olsaydı ama babam orda tesesat var diyo\"',
            '<32>* \"ama ön odaya koyacakmış bi tane\"',
            '<32>* \"bugün de güzel bir gün.\"'
         ],
         [
            '<32>{#p/human}* (Üçüncü sayfayı açtın... sanki birkaç yıl geçmiş gibi görünüyor.)',
            '<32>{#p/asriel1}{#v/2}* \"Azzy\'nin günlüğü, K-506.03.\"',
            '<32>* \"My old diary was in a box of toys And i wanted to put more in it.\"',
            '<32>* \"Looks like I only rote the first part of The date last time.\"',
            '<32>* \"By the way the Starling flower I planted before grew up.\"',
            '<32>* \"But I got in a fite with a frend The other day and we havent talked since that.\"',
            '<32>* \"Im worryed about them... i hope theyre not still mad.\"'
         ],
         [
            '<32>{#p/human}* (Dördüncü sayfayı açtın...)',
            '<32>{#p/asriel1}{#v/2}* \"Azzy\'nin günlüğü, K-506.03\"',
            '<32>* \"arkadaşımla konuştum, artık sinirli değilmiş, bu iyi haber\"',
            '<32>* \"Annemle dışarıda gökyüzünü izliyorduk ve kayan bir yıldız gördük.\"',
            '<32>* \"Bir dilek tutmamı söyledi... bi gün bi insanın gelmesini diledim.\"',
            '<32>* \"Annemle babam onlar hakkında o kadar çok hikaye anlatıyo ki...\"',
            '<32>* \"Hepsi kötü olamaz di mi?\"'
         ],
         [
            '<32>{#p/human}* (Beşinci sayfayı açtın...)',
            '<32>{#p/asriel1}{#v/2}* \"Azzy\'nin günlüğü, K-506.03\"',
            '<32>* \"Bugün diyeceğim pek bir şey yok.\"',
            '<32>* \"Belki de bu günlük fikri saçmadır.\"',
            '<32>* \"Annem beni yazarken gördü ve gurur duydukunu söledi\"',
            '<32>* \"Gerçegten o kadar önemli mi?\"'
         ],
         [
            '<32>{#p/human}* (Altıncı sayfayı açtın... birkaç yıl daha geçmiş gibi görünüyor.)',
            '<32>{#p/asriel1}{#v/1}* \"Azzy\'nin günlüğü, K-510.08\"',
            '<32>* \"Görünüşe göre bu şeye sürekli yazamıyorum.\"',
            '<32>* \"Ama bugün kitabı tekrar gördüm ve içine biraz daha yazayım dedim.\"',
            '<32>* \"Son birkaç yıl güzel geçti, okula gittim ve birçok şey öğrendim.\"',
            '<32>* \"Sayıların nasıl ekleneceği gibi.\"\n* \"Ve bilgisayar kullanmak\"',
            '<32>* \"Annem çevrimiçi hesap açamayacak kadar küçük olduğumu söyledi ama.\"',
            '<32>* \"Belki bir gün büyüdüğümde bi tane açarım.\"'
         ],
         [
            '<32>{#p/human}* (You turn to the seventh page...)',
            '<32>{#p/asriel1}{#v/1}* \"Azzy\'s Diary, K-510.08.\"',
            '<32>* \"That smart guy visited again today. He said he had a bad dream about a human.\"',
            '<32>* \"Oh, did I mention him? He is the science person dad talks to alot.\"',
            '<32>* \"He invented alot of things that we use now.\"',
            '<32>* \"Like the replicaters and fabricaters and gravity plate things.\"',
            '<32>* \"But he looked at me really odd Like I was so scary.\"',
            '<32>* \"Did I do somthing wrong?\"'
         ],
         [
            '<32>{#p/human}* (You turn to the eighth page...)',
            '<32>{#p/asriel1}{#v/1}* \"Azzy\'s Diary, K-510.08.\"',
            '<32>* \"A new star appeared in the sky today.\"',
            '<32>* \"A really brite one.\"',
            '<32>* \"I wonder why more stars dont appear like that all the time.\"',
            '<32>* \"Also we are gonna move to the new citadel when its made.\"',
            '<32>* \"I saw the blue prints of it, it looks amazing so far!\"',
            '<32>* \"It will be alot better than living in the factory too.\"'
         ],
         [
            '<32>{#p/human}* (You turn to the ninth page... seems a day was skipped.)',
            '<32>{#p/asriel1}{#v/1}* \"Azzy\'s Diary, K-510.09.\"',
            '<32>* \"I met a real human yesterday. They crashed in the trash area near our house.\"',
            '<32>* \"I helped them out of the reck and they said thanks.\"',
            '<32>* \"I didnt think it would ever happen, but here they are.\"',
            '<32>* \"And they are actually he{#p/basic}f{#p/asriel1}{#v/1}h{#p/basic}sj haha azzy is a stinky butt and he{#p/asriel1}{#v/1}vh{#p/basic}v{#p/asriel1}{#v/1}j{#p/basic}a{#p/asriel1}{#v/1}s\"',
            '<32>* \"Okay so Im actually hiding under the covers so $(name) cant mess up what Im writing.\"',
            '<32>* \"They can be a bit mean some times, but thats ok.\"',
            '<32>* \"Mom did that battle thing with them and there heart was red and upside down.\"',
            '<32>* \"Its really nice to have someone else to talk to everyday.\"'
         ],
         [
            '<32>{#p/human}* (You turn to the tenth page...)',
            '<32>{#p/asriel1}{#v/1}* \"Azzy\'s Diary, K-510.09.\"',
            '<32>* \"Mom said shes gonna adopt $(name) into the family.\"',
            '<32>* \"I dont know what adopt means but she said I will be like their brother.\"',
            '<32>* \"But thats good Cuz then I can spend more time with them.\"',
            '<32>* \"Me and $(name) are gonna do everything together!\"',
            '<32>* \"Also they said sorry for what happend in the last diary page.\"',
            '<32>* \"I didnt tell them yet but, I forgive them.\"',
            '<32>{#p/basic}* ...'
         ],
         [
            '<32>{#p/human}* (You turn to the eleventh page.)',
            '<32>{#p/asriel1}* \"Asriel\'s Diary, K-515.09\"',
            '<32>* \"$(name) said it\'s time for the plan.\"',
            '<32>* \"I was scared, but they said I could do it.\"',
            '<32>* \"After this entry, I\'ll wait for them to eat the poisoned pie we made...\"',
            '<32>* \"And then we can save everyone together.\"',
            '<32>* \"If something goes wrong, and you\'re reading this later...\"',
            '<32>* \"I want you to know that you\'re the best, $(name).\"',
            '<32>{#p/basic}* ...',
            '<32>{#p/human}* (It sounds like someone is crying...)'
         ]
      ],
      backdesk: {
         a: () => [
            ...(SAVE.data.b.svr ? [] : [ "<32>{#p/basic}* There's a backpack strung up on this coat rack." ]),
            '<32>{#p/human}* (You look inside the backpack...)',
            ...(SAVE.data.b.svr
               ? [ '<32>{#p/human}* (But there was nothing left to find within.)' ]
               : [ '<32>{#p/basic}* Nothing left to find here.' ])
         ],
         b: () => [
            ...(SAVE.data.b.svr ? [] : [ "<32>{#p/basic}* There's a backpack strung up on this coat rack." ]),
            '<32>{#p/human}* (You look inside the backpack...)',
            ...(SAVE.data.b.svr
               ? []
               : [ "<32>{#p/basic}* What's this?\n* A limited edition Super Starwalker comic strip?" ]),
            '<32>{#s/equip}{#p/human}* (You got the Super Starwalker 2.)'
         ],
         b2: () => [
            ...(SAVE.data.b.svr ? [] : [ "<32>{#p/basic}* There's a backpack strung up on this coat rack." ]),
            '<32>{#p/human}* (You look inside the backpack...)',
            ...(SAVE.data.b.svr
               ? []
               : [ "<32>{#p/basic}* What's this?\n* A limited edition Super Starwalker comic strip?" ]),
            "<32>{#p/human}* (You're carrying too much to take that.)"
         ]
      },
      midsleep: () => [
         '<32>{#p/human}* (If you sleep here now, you may miss something important.)',
         choicer.create('* (Go to sleep?)', 'Evet', 'Hayır')
      ],
      bedfailToriel: [
         '<25>{#p/toriel}{#f/5}* Oh dear.',
         '<25>{#f/1}* Perhaps my actions have done more harm than I first imagined...',
         '<25>{#f/0}* ...\n* Worry not, my child.',
         "<25>* I will make sure you get a good night's rest for the journey ahead.",
         '<32>{#p/human}* (Toriel sits next to you and sings a lullaby to put you to sleep.)'
      ],
      blooky1: () => [
         '<32>{#p/napstablook}* Zzz... Zzz...',
         '<32>* Zzz... Zzz...',
         "<32>{#p/basic}* Bu hayalet yüksek sesle durmadan ‘z’ diyerek uyuma numarası yapıyor.",
         choicer.create('* (Üstünden yürümeye çalış?)', 'Evet', 'Hayır')
      ],
      blooky2: () => [
         '<32>{#p/basic}* Hayalet hala yolu kapatıyor.',
         choicer.create('* (Üstünden yürümeye çalış?)', 'Evet', 'Hayır')
      ],
      blooky3: [
         '<32>{#p/napstablook}* genellikle buraya biraz huzur ve sessizlik bulmak için uğrarım…',
         '<32>* ancak bugün iyi biriyle tanıştım...',
         "<32>* öyleyse, yolundan çekileyim bari",
         '<32>* görüşürüz...'
      ],
      blooky4: [
         '<32>{#p/napstablook}* demek ımm…\n* beni cidden seviyorsun, ha',
         '<32>* hehe... teşekkürler...',
         '<32>* ve şey... az önce yolunda durduğum için üzgünüm...',
         "<32>* şimdi başka bir yere gideyim madem",
         "<32>* ama… endişelenme...",
         "<32>* beni tekrar göreceksin...",
         '<32>* eğer istersen…',
         '<32>* öyleyse, görüşürüz...'
      ],
      blooky5: [
         '<32>{#p/napstablook}* demek ımm… beni cidden çekemiyorsun, ha',
         "<32>* bu… güzel...",
         "<32>* öyleyse, ben de yoluma gideyim bari",
         '<32>* bay...'
      ],
      blooky6: [
         '<32>{#p/napstablook}* demek ımm... o yaşandı...',
         '<32>* ...',
         '<32>* şey… şimdi gitmem gerek',
         '<32>* görüşürüz...'
      ],
      blooky7: [
         "<32>{#p/napstablook}* bana hiçbir şey söylemedin bile…",
         "<32>* bu… buna ne diyeceğimi bile bilmiyorum...",
         "<32>* öyleyse, ben de gideyim madem",
         '<32>* bay...'
      ],
      breakfast: [ '<32>{#p/human}* (You got the Fried Snails.)' ],
      breakslow: [ "<32>{#p/human}* (You're carrying too much to take that.)" ],
      candy1: () =>
         SAVE.data.b.svr
            ? [
                 '<32>{#p/human}* (You approach the vending machine.)',
                 choicer.create('* (What will you make?)', 'Candy', 'Water', 'Δ-9', 'Nothing')
              ]
            : [
                 '<32>{#p/basic}* Synthesize something with the vending machine?',
                 choicer.create('* (What will you make?)', 'Candy', 'Water', 'Δ-9', 'Nothing')
              ],
      candy2: [ '<32>{#p/human}* (You got the $(x).)\n* (Press [C] to open the menu.)' ],
      candy3: [ '<32>{#p/human}* (You got the $(x).)' ],
      candy4: () => [
         '<32>{#p/human}* (You got the $(x).)',
         ...(SAVE.data.b.svr ? [] : [ '<32>{#p/basic}* The machine is beginning to malfunction.' ])
      ],
      candy5: () => [
         '<32>{#p/human}* (You got the $(x).)',
         ...(SAVE.data.b.svr ? [] : [ '<32>{#p/basic}* The machine broke down.' ])
      ],
      candy6: () =>
         SAVE.data.b.svr
            ? [
                 [
                    '<25>{#p/asriel1}{#f/13}* Out of service again?',
                    "<25>{#f/17}* Yeah, that's... by design, actually.",
                    "<25>{#f/13}* This machine runs on the Outlands' own power supply, so...",
                    '<25>{#f/15}* To avoid using too much power, Toriel just made it break itself.',
                    "<26>{#f/20}* Not that she'd tell you."
                 ],
                 [
                    '<25>{#p/asriel1}{#f/13}* The reason that power supply is so small, though...',
                    "<25>{#f/17}* It's because, unlike the CORE, it only uses background radiation.",
                    "<25>{#f/13}* To put it into numbers, I'd say...",
                    '<25>{#f/15}* It generates about ten- thousandths of the power the CORE does.'
                 ],
                 [
                    '<25>{#p/asriel1}{#f/13}* Hmm...',
                    '<25>{#f/15}* I wonder if, despite its low capacity...',
                    '<25>{#f/13}* This generator would be enough to power a small atmospheric system.',
                    '<25>{#f/17}* If the CORE was destroyed, could people survive here...?'
                 ],
                 [ '<26>{#p/asriel1}{#f/20}* ... asking for a friend.' ]
              ][Math.min(asrielinter.candy6++, 3)]
            : [ "<32>{#p/basic}* It's out of service." ],
      candy7: [ '<32>{#p/human}* (You decide not to make anything.)' ],
      candy8: [ "<32>{#p/human}* (You're carrying too much.)" ],
      chair1a: () => [
         '<25>{#p/toriel}{#f/1}{#n1}* Ne oldu, çocuğum?\n* Aç mısın?',
         '<25>{#f/0}* Belki okuduğum kitap hakkında daha fazlasını bilmek istersin.',
         choicer.create('{#n1!}* (What do you say?)', 'Aç', 'Kitap', 'Ev', 'Nothing')
      ],
      chair1b: () => [
         '<25>{#p/toriel}{#n1}* Ne oldu, çocuğum?',
         choicer.create('{#n1!}* (What do you say?)', 'Aç', 'Kitap', 'Ev', 'Nothing')
      ],
      chair1c: [ '<25>{#p/toriel}{#n1}* Peki, bir şeye ihtiyacın olursa bana haber ver.' ],
      chair1d: [ '<25>{#p/toriel}{#n1}* Peki, fikrini değiştirirsen bana haber ver.' ],
      chair1e: () => [
         '<25>{#p/toriel}{#f/1}{#n1}* Uykusuz bir gece mi?',
         '<25>{#f/1}* ...\n* Eğer istersen, sana bu kitabı okuyabilirim...',
         '<25>{#f/0}* Adı \"Cömert Canavar\" ve bir insan tarafından yazılmıştır.',
         choicer.create('{#n1!}* (Kitabı oku?)', 'Evet', 'Hayır')
      ],
      chair1f: pager.create(
         0,
         [ '<25>{#p/toriel}{#n1}{#f/1}* Ziyarete mi döndün?', '<25>{#f/0}* Peki, ihtiyacın olduğu kadar kalmakta özgürsün.' ],
         [ '<26>{#p/toriel}{#n1}{#f/5}* Ben her zaman olduğu gibi burada kalacağım...' ]
      ),
      chair2a1: () => [
         '<25>{#p/toriel}{#f/1}{#n1}* Aç mısın?\n* Kahvaltı hazırlamamı ister misin?',
         choicer.create('{#n1!}* (Kahvaltı yap?)', 'Evet', 'Hayır')
      ],
      chair2a2: [ '<25>{#p/toriel}{#n1}* Müthiş!\n* Ben mutfakta hazırlıyor olacağım.' ],
      chair2a3: () => [
         '<25>{#p/toriel}{#f/1}{#n1}* Kahvaltı konusunda fikrini mi değiştirdin?',
         choicer.create('{#n1!}* (Kahvaltı yap?)', 'Evet', 'Hayır')
      ],
      chair2a4: () =>
         SAVE.data.b.drop_snails
            ? [
                 '<25>{#p/toriel}{#f/3}{#n1}* İlkini bıraktıktan sonra bir tane daha yapmamı mı bekliyorsun?',
                 '<25>{#f/4}* Bu çocuk...',
                 '<25>{#f/0}* Hayır, ufaklık.\n* Başka bir kahvaltı daha hazırlamayacağım.'
              ]
            : [
                 '<25>{#p/toriel}{#n1}* Kahvaltı servisini çoktan yaptım, ufaklık.',
                 '<25>{#f/1}* Günde birden fazla kahvaltı yapamayız, değil mi?',
                 '<25>{#f/0}* Bu saçma olurdu.'
              ],
      chair2c1: () => [
         '<25>{#p/toriel}{#n1}* Ah, bu kitap!\n* Evet, oldukça eğlenceli bir parça.',
         '<25>{#f/0}* Adı \"Cömert Canavar\" ve bir insan tarafından yazılmış.',
         '<25>{#f/1}* Bunu sana okumamı ister misin?',
         choicer.create('{#n1!}* (Kitabı oku?)', 'Evet', 'Hayır')
      ],
      chair2c2: [ '<25>{#p/toriel}{#n1}* Harika!', '<25>{#g/torielCompassionSmile}* ...' ],
      chair2c3: () => [
         '<25>{#p/toriel}{#f/1}{#n1}* Şimdi kitabı okumamı istiyor musun?',
         choicer.create('{#n1!}* (Kitabı oku?)', 'Evet', 'Hayır')
      ],
      chair2c4: () => [
         '<25>{#p/toriel}{#f/1}{#n1}* Kitabı sana tekrar okumamı mı istiyorsun?',
         choicer.create('{#n1!}* (Kitabı oku?)', 'Evet', 'Hayır')
      ],
      chair2c5: [ '<25>{#p/toriel}{#f/1}{#n1}* Pekala, öyleyse...', '<25>{#p/toriel}{#g/torielCompassionSmile}* ...' ],
      chair2c6: [
         '<25>{#f/1}{#n1}* \"Bir zamanlar, bir canavar vardı...\"',
         '<25>{#f/0}* \"Ve o küçük bir insanı sevdi.\"',
         '<25>{#f/1}* \"Ve her gün, insan ziyarete gelirdi...\"',
         '<25>{#f/0}* \"Ve tarlalarda birlikte koşup oynarlardı.\"',
         '<25>{#f/1}* \"Birlikte şarkılar söyler, hikayeler anlatırlardı...\"',
         '<25>{#f/0}* \"Ve saklambaç oynarlardı.\"',
         '<25>{#f/1}* \"Ve insan yorulduğunda, o insanı yatağa yatırırdı...\"',
         '<25>{#f/0}* \"Ve insan canavarı çok sevdi.\"',
         '<25>{#f/0}* \"Ve canavar mutluydu.\"',
         '<25>{#f/1}* \"Ama zaman geçtikçe, ve insan yaşlandıkça...\"',
         '<25>{#f/0}* \"Canavar sıklıkla yalnız kalıyordu.\"',
         '<25>{#f/1}* \"Sonra bir gün, insan geri geldi...\"',
         '<25>{#f/0}* \"Ve canavar dedi ki \'Gel insan, gel de oyna!\'\"',
         '<25>{#f/5}* \"\'Oynamak için fazla büyüğüm,\' dedi insan.\"',
         '<25>{#f/1}* \"\'Araba sürmek, yeni bir ev bulmak istiyorum...\'\"',
         "<25>{#f/5}* \"'Üzgünüm,' dedi canavar, 'ama araba alamayacak kadar yoksulum.'\"",
         '<25>{#f/5}* \"\'Benim sadece kendi iki ayağım var.\'\"',
         '<25>{#f/0}* \"\'Sırtıma tırman, ve seni ihtiyacın olan yere götürebilirim.\'\"',
         '<25>{#f/0}* \"\'O zaman şehri görebilir ve mutlu olabilirsin.\'\"',
         '<25>{#f/1}* \"Ve böylece insan canavarın sırtına tırmandı...\"',
         '<25>{#f/0}* \"Ve canavar onu yeni bir eve götürdü.\"',
         '<25>{#f/0}* \"Ve canavar mutluydu.\"',
         '<25>{#f/1}* \"Ama insan uzun bir süre boyunca uzakta kaldı...\"',
         '<25>{#f/5}* \"Ve canavar mutsuzdu.\"',
         '<25>{#f/0}* \"Sonra bir gün, insan geri geldi.\"',
         '<25>{#f/1}* \"Ve canavar kulaklarına kadar gülümseyip dedi ki...\"',
         '<25>{#f/1}* \"\'Gel, insan, gel sırtıma bin!\'\"',
         '<25>{#f/5}* \"\'Etrafta dolaşmak için çok mutsuzum,\' dedi insan.\"',
         '<25>{#f/1}* \"\'Keşke çocuklarım, ve bir ailem olsaydı...\'\"',
         "<25>{#f/5}* \"'Üzgünüm,' dedi canavar, 'ama sana bunu sağlayamam.'\"",
         '<25>{#f/5}* \"\'Ben yalnızca tek bir kişiyim.\'\"',
         '<25>{#f/0}* \"\'Bir süreliğine ziyaret et, ve sana bir randevu bulabiliriz.\'\"',
         '<25>{#f/0}* \"\'O zaman aşkı bulabilir ve mutlu olabilirsin.\'\"',
         '<25>{#f/1}* \"Ve böylece insan eski dostunu bir süreliğine ziyaret etti...\"',
         '<25>{#f/0}* \"Ve canavar onun beğenebileceği birisini buldu.\"',
         '<25>{#f/0}* \"Ve canavar mutluydu.\"',
         '<25>{#f/5}* \"Ama insan uzun süre boyunca uzakta kaldı.\"',
         '<25>{#f/1}* \"Sonunda geri döndüğünde, canavar çok mutluydu...\"',
         '<25>{#f/9}* \"Zar zor konuşabiliyordu.\"',
         '<25>{#f/1}* \"\'Gel, insan,\' diye fısıldadı...\"',
         '<25>{#f/1}* \"\'Gel ve ziyaret et.\'\"',
         '<25>{#f/5}* \"\'Ziyaret etmek için çok yaşlı ve meşgulüm\' dedi insan.\"',
         '<25>{#f/1}* \"\'Gece için dinlenebileceğim bir yer istiyorum...\'\"',
         "<25>{#f/5}* \"'Üzgünüm,' dedi canavar, 'ama sana uyacak bir yatağım yok.'\"",
         '<25>{#f/5}* \"\'Hala bir tane alamayacak kadar yoksulum.\'\"',
         '<25>{#f/0}* \"\'Gece benimle uyu.\'\"',
         '<25>{#f/0}* \"\'O zaman biraz dinlenebilir ve mutlu olabilirsin.\'\"',
         '<25>{#f/1}* \"Ve böylece insan ve canavar birbirlerine sarıldılar...\"',
         '<25>{#f/0}* \"Ve canavar insanı uyutmayı başardı.\"',
         '<25>{#f/0}* \"Ve canavar mutluydu.\"',
         '<25>{#f/5}* \"... ama tam anlamıyla değil.\"',
         '<25>{#f/9}* \"Ve uzun bir aradan sonra, insan tekrar geri geldi.\"',
         "<25>{#f/5}* \"'Üzgünüm, insan,' dedi canavar, 'ama ben düşmüş durumdayım.'\"",
         '<25>{#f/5}* \"\'Bacaklarım tutmuyor, seni hiçbir yere götüremem.\'\"',
         '<25>{#f/10}* \"\'Başka hiçbir yerde olmak istemiyorum,\' dedi insan.\"',
         '<26>{#f/5}* \"\'Sana bir randevu bulamam, tanıdığım kimse yok\' dedi canavar.\"',
         '<25>{#f/10}* \"\'Başka kimseyle olmak istemiyorum,\' dedi insan.\"',
         '<25>{#f/5}* \"\'Üzerimde uyuman için çok zayıfım\', dedi canavar.\"',
         '<25>{#f/10}* \"\'Daha fazla uykuya ihtiyacım yok,\' dedi insan.\"',
         "<25>{#f/5}* \"'Üzgünüm,' diye iç çekti canavar.",
         '<25>{#f/5}* \"\'Keşke sunabileceğim bir şey olsaydı, ama elimde hiçbir şey kalmadı.\'\"',
         '<25>{#f/9}* \"\'Ben sadece ölümüne yaklaşan yaşlı bir canavarım.\'\"',
         '<25>{#f/5}* \"\'Üzgünüm...\'\"',
         '<25>{#f/10}* \"\'Artık çok fazla şeye ihtiyacım yok,\' dedi insan.\"',
         '<25>{#f/10}* \"\'Sadece ölmeden önce en iyi dostumdan bir sarılma.\'\"',
         '<25>{#f/1}* \"\'Peki,\' dedi canavar, duruşunu düzelterek...\"',
         '<25>{#f/0}* \"\'Peki, yaşlı bir canavar bunun için her zaman burada.\'\"',
         '<25>{#f/0}* \"\'Gel, insan, gel bana. Son bir kez daha benimle ol.\'\"',
         '<25>{#f/9}* \"Ve insan da bunu yaptı.\"',
         '<25>{#f/10}* \"Ve canavar mutluydu.\"'
         
      ],
      chair2c7: [ '<25>{#f/0}{#n1}* İşte, hikaye buydu.', '<25>{#f/1}* Umarım beğenmişsindir...' ],
      chair2c8: [ '<25>{#f/0}{#n1}* İşte bu kadar.' ],
      chair2d1: [
         '<25>{#p/toriel}{#f/1}{#n1}* Ev...?\n* Biraz daha spesifik olabilir misin?',
         '<99>{#p/human}{#n1!}* (Ne diyeceksin?){!}\n§shift=48§Never§shift=72§Ne zaman eve\n§shift=48§mind§shift=80§gidebilirim?{#c/0/6/4}'
      ],
      chair2d2: [
         '<25>{#p/toriel}{#f/1}{#n1}* Ama... burası artık senin evin, değil mi?',
         '<99>{#p/human}{#n1!}* (Ne diyeceksin?){!}\n§shift=144§Outlands\'den\n§shift=64§Sorry§shift=40§nasıl çıkılır{#c/0/8/2}'
      ],
      chair2d3: [
         '<25>{#p/toriel}{#f/5}{#n1}* Lütfen, anlamaya çalış...',
         '<25>{#p/toriel}{#f/9}* Ben yalnızca senin için en iyisini istiyorum.'
      ],
      chair2d4: [
         '<25>{#p/toriel}{#f/5}{#n1}* Çocuğum...',
         '<99>{#p/human}{#n1!}* (Ne diyeceksin?){!}\n§shift=144§Outlands\'den\n§shift=64§Sorry§shift=40§nasıl çıkılır{#c/0/8/2}'
      ],
      chair2d5: [ '<25>{#p/toriel}{#f/5}{#n1}* ...' ],
      chair2d6: [
         '<25>{#p/toriel}{#f/9}{#n1}* ...',
         '<25>{#p/toriel}{#f/9}* Lütfen, burada bekle.',
         '<25>{#p/toriel}{#f/5}* Yapmam gereken bir şey var.'
      ],
      chair3: () =>
         SAVE.data.b.svr
            ? [
                 [
                    "<25>{#p/asriel1}{#f/20}* I still can't believe she moved this all the way from the Citadel.",
                    "<25>{#f/17}* But... I understand why she'd want to.",
                    '<25>{#f/13}* Mom and this chair of hers go pretty far back..'
                 ],
                 [
                    '<25>{#p/asriel1}{#f/13}* One time, she told me something...',
                    '<25>{#f/17}* \"This chair reminds me of home.\"',
                    '<25>{#f/13}* But she was already at home, so I asked her what she meant.',
                    '<25>{#f/17}* Turns out she had this at her home...',
                    '<25>{#f/23}* ... on the old homeworld.'
                 ],
                 [
                    "<25>{#p/asriel1}{#f/13}* I don't know much about that world, Frisk...",
                    '<25>{#f/17}* But I hear it was very... idyllic.',
                    '<25>{#f/20}* Sure, there were lots of advances in magic and technology...',
                    '<25>{#f/17}* But people loved it, because life was so... simple.'
                 ],
                 [ "<25>{#p/asriel1}{#f/23}* What I wouldn't give to have a simple life." ]
              ][Math.min(asrielinter.chair3++, 3)]
            : world.darker
            ? [ '<32>{#p/basic}* A reading chair.' ]
            : [ '<32>{#p/basic}* A comfy reading chair...', '<32>* Seems like the right size for Toriel.' ],
      chair4: [ '<25>{#p/toriel}{#n1}* Ah, işte buradasın.', '<25>* Senin için kahvaltını masaya bıraktım.' ],
      closetrocket: {
         a: () => [
            '<32>{#p/human}* (You look inside the chest...)',
            ...(SAVE.data.b.svr
               ? [
                    [
                       "<25>{#p/asriel1}{#f/13}* Yeah, uh, that's about all you'll find in there.",
                       "<25>{#f/17}* I'm not sure why Toriel put this here.",
                       '<25>{#f/17}* $(name) and I were never interested in comic books.'
                    ],
                    [ '<25>{#p/asriel1}{#f/10}* I guess she just wanted to pretend we were living here...?' ],
                    [ '<25>{#p/asriel1}{#f/13}* The things a mother does to make herself feel better...' ]
                 ][Math.min(asrielinter.closetrocket_a++, 2)]
               : [ '<32>{#p/basic}* Nothing left to find here.' ])
         ],
         b: () => [
            '<32>{#p/human}* (You look inside the chest...)',
            ...(SAVE.data.b.svr
               ? []
               : [ "<32>{#p/basic}* What's this?\n* A limited edition Super Starwalker comic strip?" ]),
            '<32>{#s/equip}{#p/human}* (You got the Super Starwalker 3.)'
         ],
         b2: () => [
            '<32>{#p/human}* (You look inside the chest...)',
            ...(SAVE.data.b.svr
               ? []
               : [ "<32>{#p/basic}* What's this?\n* A limited edition Super Starwalker comic strip?" ]),
            "<32>{#p/human}* (You're carrying too much to take that.)"
         ]
      },
      goner: {
         a1: [
            '<32>{#p/human}* Hiçbir bağlantıya bağlı olmayan bir dünya...',
            '<32>* Sadece kendi güzelliği uğruna var olan...',
            "<32>* Bunun hakkında özel bir şey var."
         ],
         a2: [ '<32>* Söyle bana...', '<32>* Bu senin... merakını uyandırmıyor mu?' ]
      },
      danger_puzzle1: () => [
         '<25>{#p/toriel}* Bu odada yeni bir tür bulmaca yer alıyor.',
         [ 1, 5 ].includes(SAVE.data.n.state_wastelands_dummy)
            ? '<25>{#f/3}* Belki burada manken ile olduğundan daha iyi iş çıkarırsın.'
            : '<25>{#f/1}* Çözebileceğini düşünüyor musun?'
      ],
      danger_puzzle2: () =>
         world.darker
            ? [ "<32>{#p/basic}* Senin erişemeyeceğin kadar yüksek." ]
            : [ "<32>{#p/basic}* Bu terminalin baş döndürücü yüksekliği, hevesle yaklaşmanı engelliyor." ],
      danger_puzzle3: () => [
         [ 1, 5 ].includes(SAVE.data.n.state_wastelands_dummy)
            ? '<25>{#p/toriel}{#f/3}* Şimdi ne oldu...'
            : '<25>{#p/toriel}{#f/1}* Sorun nedir?\n* Yardıma mı ihtiyacın var?'
      ],
      danger_puzzle4: () => [
         ...([ 1, 5 ].includes(SAVE.data.n.state_wastelands_dummy)
            ? [ '<25>{#p/toriel}{#f/5}* Ah... Anlıyorum.', '<25>{#f/5}* Terminal senin erişemeyeceğin kadar yüksek.' ]
            : [
                 '<25>{#p/toriel}{#f/7}* ... ah.',
                 '<25>{#f/6}* Burada biraz tasarım hatası olmuş gibi görünüyor.',
                 '<25>{#f/1}* Demek terminal senin ulaşamayacağın kadar yüksekte...?'
              ]),
         '<25>{#f/0}* Önemli değil.\n* Ben senin için çalıştırırım.',
         '<25>{#f/0}* ...',
         '<25>{#f/0}* Burada çözülecek bir bilmece var.\n* Denemek ister misin?',
         choicer.create('* (Bilmeceyi çöz?)', 'Evet', 'Hayır')
      ],
      danger_puzzle5a: [
         '<25>{#p/toriel}* Mükemmel!\n* Öğrenme ve büyümeye isteklilik önemlidir.',
         '<25>{#f/0}* Özellikle senin gibi genç biri için.'
      ],
      danger_puzzle5b: [
         '<25>{#p/toriel}{#f/0}* Bilmece bir soru biçimini alıyor.',
         "<25>{#p/toriel}{#f/1}* \"Hem pişmiş hem de pasta gibi, 'orta' ile kafiyeli şey nedir?\""
      ],
      danger_puzzle5c: [
         '<32>{#p/human}* (...)\n* (Toriel\'e cevabı söylüyorsun.)',
         '<25>{#p/toriel}{#f/0}* ... ah, çok iyi.\n* Hem de böylesine olumlu bir tavırla!'
      ],
      danger_puzzle5d: [
         '<32>{#p/human}* (...)\n* (Toriel\'e cevabı bilmediğini söylüyorsun.)',
         '<25>{#p/toriel}{#f/1}* ... bir sorun mu var?\n* Aklına takılan bir şey varmış gibi görünüyorsun.',
         '<25>{#f/5}* ... hmm...',
         '<25>{#f/0}* Yani, pekala.\n* Bu sefer bilmeceyi senin için ben çözeceğim.'
      ],
      danger_puzzle5e: () =>
         [ 1, 5 ].includes(SAVE.data.n.state_wastelands_dummy)
            ? [ '<25>{#p/toriel}{#f/5}* ...', '<25>{#f/5}* Anlıyorum.' ]
            : [ '<25>{#p/toriel}{#f/0}* ...', '<25>{#f/0}* Sanırım bu seferlik bilmeceyi senin için çözebilirim.' ],
      danger_puzzle6: () => [
         [ 1, 5 ].includes(SAVE.data.n.state_wastelands_dummy) && SAVE.data.b.w_state_riddleskip
            ? '<25>{#p/toriel}{#f/5}* Ve... {#x1}işte.\n* Yol açılmış durumda.'
            : '<25>{#p/toriel}* Ve... {#x1}işte!\n* Yol açılmış durumda!'
      ],
      danger_puzzle7: () => [
         [ 1, 5 ].includes(SAVE.data.n.state_wastelands_dummy) && SAVE.data.b.w_state_riddleskip
            ? '<25>{#p/toriel}{#f/5}* Bir sonraki odaya girmeni bekleyeceğim.'
            : '<25>{#p/toriel}* Hazır olduğunda, bir sonraki odaya girebilirsin.'
      ],
      danger_puzzle8: () =>
         SAVE.data.b.svr
            ? [ "<32>{#p/human}* (Ama hala terminale erişemedin.)" ]
            : [ '<32>{#p/basic}* Şimdi bile, terminal her zamanki gibi oldukça yüksek duruyor.' ],
      denie: [ "<32>{#p/human}* (You're carrying too much to take that.)" ],
      dipper: {
         a: () => [
            '<32>{#p/human}* (You got the Little Dipper.)',
            choicer.create('* (Equip the Little Dipper?)', 'Evet', 'Hayır')
         ],
         b: [ "<32>{#p/human}* (You're carrying too much to take that.)" ]
      },
      drop_pie: [ '<25>{#p/toriel}{#f/1}* Turtalar yenmek içindir, yere dökülmek için değil.' ],
      drop_pie3: [ '<25>{#p/toriel}{#f/1}* Lütfen yere yiyecek dökme.' ],
      drop_snails: [ '<25>{#p/toriel}{#f/1}* O zavallı kızarmış salyangozlar sana ne yaptı.' ],
      drop_soda: [ "<32>{#p/basic}{#n1}* Aww c'mon! ;)", '<32>* I poured my heart into that! ;)' ],
      drop_steak: [ '<32>{#p/basic}{#n1}* Seriously!? ;)', '<32>* That steak was utterly priceless! ;)' ],
      dummy1: [
         '<25>{#p/toriel}{#f/0}* Sıradaki dersin diğer canavarlar ile karşılaşmayı içeriyor.',
         '<25>{#f/1}* Karakolda dolaşan bir insan olarak saldırıya uğraman muhtemeldir...',
         '<25>{#f/0}* Eğer bu olursa, SAVAŞ denilen bir duruma gireceksin.',
         '<25>{#f/0}* Neyseki, bunu çözmenin birden fazla yolu var.',
         '<25>{#f/1}* Şimdilik, arkadaşça bir sohbet başlatmayı öneriyorum...',
         '<25>{#f/0}* ... böylece senin adına çatışmayı çözebilmem için fırsat verirsin.'
      ],
      dummy2: [ '<25>{#p/toriel}* Başlangıç için, mankenle konuşma pratiği yapabilirsin.' ],
      dummy3: [
         '<25>{#p/toriel}{#f/7}* ... mankenin benim olduğumu mu düşünüyorsun?',
         '<25>{#f/6}* Hahaha!\n* Ne kadar sevimli!',
         '<25>{#f/0}* Ne yazık ki, ben sadece endişeli bir yaşlı hanımım.'
      ],
      dummy4: [
         '<25>{#p/toriel}* Korkulacak hiçbir şey yok, çocuğum.',
         '<25>* Basit bir eğitim mankeni sana zarar veremez.'
      ],
      dummy5: [ '<25>{#p/toriel}{#f/1}* Tereddüt etme, ufaklık...' ],
      dummy6: [
         '<25>{#p/toriel}{#f/2}* Çocuk, hayır!\n* Bu manken savaşmak için yapılmadı!',
         '<25>{#f/1}* Zaten kimseyi incitmek istemeyiz, değil mi?',
         '<25>{#f/0}* Gel öyleyse.'
      ],
      dummy7: [ '<25>{#p/toriel}* Mükemmel!\n* Oldukça hızlı öğrenen birisin anlaşılan.' ],
      dummy8: [
         '<25>{#p/toriel}{#f/1}* Kaçtın mı...?',
         '<25>{#f/0}* Aslında, bu akıllıca bir tercih olabilirdi.',
         '<26>{#f/1}* Kaçarak çıkması muhtemel bir çatışmayı önlemiş oldun...',
         '<25>{#f/0}* ... her ne kadar bu basit bir eğitim mankeni olsa bile.'
      ],
      dummy9: [ '<25>{#p/toriel}{#f/3}* ...', '<25>{#f/4}* ...', '<25>{#f/0}* Sıradaki oda bekliyor.' ],
      dummy9a: [ '<25>{#p/toriel}{#f/3}* ...', '<25>{#f/4}* ...', '<25>{#f/6}* Sıradaki oda bekliyor.' ],
      dummy10: [
         '<25>{#p/toriel}{#f/7}* Çocuğum, bu...',
         '<25>{#f/0}* ... bu belki de şimdiye kadar gördüğüm en sevimli şey olabilir.',
         '<25>{#f/0}* Her halükarda, bu dersi takdire şayan bir şekilde hallettin.',
         '<25>{#f/0}* Sıradaki oda bekliyor.'
      ],
      dummy11: [ '<25>{#p/toriel}* Sıradaki oda bekliyor.' ],
      dummy12: [
         '<25>{#p/toriel}{#f/2}* Tanrım, çocuğum!\n* Merhamet göster!',
         '<25>{#f/1}* ...',
         '<25>{#f/0}* Neyse ki, bu sadece bir eğitim mankeniydi.',
         '<25>{#f/1}* Ancak gelecekte, akıllıca olacak şey...',
         '<25>{#f/0}* ... başkalarına neredeyse ölüme kadar vurmamaktır!',
         '<26>{#f/0}* Her neyse.\n* Bir sonraki oda bekliyor.'
      ],
      eat_pie: [ '<25>{#p/toriel}{#f/1}{#n1}* Lezzetli, değil mi?' ],
      eat_snails: [ '<25>{#p/toriel}{#f/0}{#n1}* Umarım kahvaltın yeterli olmuştur.' ],
      eat_soda: [
         '<32>{#p/basic}* Aaron pulled out his phone and snapped a picture.',
         '<32>{#p/basic}{#n1}* Ooh, I could definitely put this on an poster somewhere ;)'
      ],
      eat_steak: [
         '<32>{#p/basic}* Aaron shot you with a wink.',
         '<32>{#p/basic}{#n1}* You like the product, lassy? ;)'
      ],
      endtwinkly2: [
         '<32>{#p/basic}* Bu kim olduğunu zannediyor ki?',
         "<32>* Tanıştığımız herkese sadece iyilik ettin.",
         '<32>* O konuşan yıldız gitsin kendi işine baksın...'
      ],
      endtwinklyA1: [
         '<25>{#p/twinkly}{#f/12}* Seni salak...',
         "<25>* Daha önce beni duymadın mı!?",
         '<25>* İşi mahvetmemeni söylediğimi düşünüyorum!',
         "<25>* Bak şimdi planımıza ne yaptın.",
         '<25>{#f/8}* ...',
         '<25>{#f/6}* Bunu düzeltsen iyi edersin, $(name).',
         "<25>{#f/5}* Bu bizim kaderimiz."
      ],
      endtwinklyA2: () =>
         SAVE.flag.n.genocide_milestone < 1
            ? [
                 '<25>{#p/twinkly}{#f/5}* Selam, $(name).',
                 "<25>{#f/5}* Görünüşe göre artık benimle oynamak istemiyorsun.",
                 '<25>{#f/6}* Sana sabır göstermeye çalıştım, ama işte buradayız...',
                 '<25>{#f/6}* Yine yolun başındayız.',
                 '<25>{#f/8}* Tekrar, ve tekrar...',
                 '<25>{#f/5}* Bütün bu olan bitenin komik olduğunu sanıyorsundur.',
                 '<25>{#f/7}* Tekrar seninle olma şansıyla beni kışkırtıp sonra onu elimden alman...',
                 "<25>{#f/5}* Ama, sorun yok.",
                 "<25>{#f/5}* Eğer oynamak istediğin oyun buysa, devam et bari.",
                 "<25>{#f/11}* Sadece kontrolün sende uzun süre kalmayacağını bil...",
                 "<25>{#f/7}* Eninde sonunda, yaptıklarından pişmanlık duyacaksın."
              ]
            : [
                 '<25>{#p/twinkly}{#f/6}* Selam, $(name).',
                 ...(SAVE.flag.n.genocide_milestone < 7
                    ? [
                         "<25>{#f/6}* Olanları düşünmek için biraz vaktim olmuştu.",
                         '<25>{#f/5}* İlk başta heyecan vericiydi...',
                         '<25>* Cebren ve hile ile karakolu zapt etme düşüncesi...',
                         "<25>{#f/6}* Ama şimdi, pek emin değilim.",
                         '<25>{#f/8}* ...',
                         '<25>{#f/8}* Galiba... orada biraz kendimi kaptırdım.',
                         "<25>{#f/5}* Ama sorun yok değil mi?\n* Sen beni affedersin, ha?"
                      ]
                    : [
                         "<25>{#f/6}* Hala orada tam olarak ne yaşandığını bilmiyorum...",
                         "<25>{#f/5}* Bu... beni biraz korkutuyor, haha...",
                         '<25>{#f/8}* ...',
                         '<25>{#f/8}* Belki de... bu işleri sonraya bıraksak iyi olacak.',
                         "<25>{#f/5}* Ama sorun yok değil mi?\n* Bu sana uyar, ha?"
                      ]),
                 '<25>{#f/6}* ...',
                 '<25>{#f/8}* Görüşürüz, $(name)...',
                 ...(SAVE.flag.n.genocide_milestone < 7 ? [ "<25>{#f/5}* Sen bilemeden dönmüş olacağım." ] : [])
              ],
      endtwinklyAreaction: [
         '<32>{#p/basic}* Pardon, bir şey kaçırdım mı?',
         "<32>* Onunla bir göreve atılmayı bırak, hayatım boyunca hiç konuşmadım.",
         "<32>* Her neyse.\n* Benimle ilgili ilk hikaye uyduruşu değil sonuçta."
      ],
      endtwinklyB: () =>
         SAVE.data.b.w_state_lateleave
            ? [
                 '<25>{#p/twinkly}{#f/5}{#v/0}* Evet.\n* Bu beklenmedik bir şeydi.',
                 "<25>{#f/11}{#v/0}* Sen kuralları çiğneyip geçebileceğini sanıyorsun, di mi?",
                 '<25>{#f/7}{#v/0}* Hee hee hee...',
                 "<25>{#f/0}{#v/1}* Bu dünyada, ya ÖLÜRSÜN ya da ÖLDÜRÜRSÜN."
              ]
            : [
                 '<25>{#p/twinkly}{#f/5}{#v/0}* Dahice.\n* Çooooook dahice.',
                 "<25>{#f/11}{#v/0}* Kendini pek akıllı sanıyorsun, di mi?",
                 '<25>{#f/7}{#v/0}* Hee hee hee...',
                 "<25>{#f/0}{#v/1}* Bu dünyada, ya ÖLÜRSÜN ya da ÖLDÜRÜRSÜN."
              ],
      endtwinklyB2: [
         '<25>{#f/8}{#v/0}* Eğer BİRAZCIK daha canavar öldürseydin var ya...',
         "<25>{#f/9}{#v/0}* Neyse, belki de planlarımı hemen ortaya dökmemeliyim.",
         '<25>{#f/7}{#v/0}* Biliyor musun, $(name)...',
         "<25>{#f/5}{#v/0}* Tekrar beraber olmamız an meselesi.",
         '<25>{#f/6}{#v/0}* Bir dahaki sefer biraz daha çabala ve belki...',
         "<25>{#f/5}{#v/0}* Belki ilginç bir şeyle karşılaşırsın.",
         '<25>{#f/11}{#v/0}* Tekrardan görüşmek üzere...'
      ],
      endtwinklyB3: [
         '<25>{#f/8}{#v/0}* Eğer sadece BİR canavar daha öldürseydin var ya...',
         "<25>{#f/9}{#v/0}* Neyse, belki de planlarımı hemen ortaya dökmemeliyim.",
         '<25>{#f/7}{#v/0}* Biliyor musun, $(name)...',
         "<25>{#f/5}{#v/0}* Tekrar beraber olmamız an meselesi.",
         '<25>{#f/6}{#v/0}* Bir dahaki sefer biraz daha çabala ve belki...',
         "<25>{#f/5}{#v/0}* Belki ilginç bir şeyle karşılaşırsın.",
         '<25>{#f/11}{#v/0}* Tekrardan görüşmek üzere...'
      ],
      endtwinklyBA: () => [
         SAVE.data.n.state_wastelands_napstablook === 5
            ? '<25>{#p/twinkly}{#f/6}{#v/0}* Demek kimseyi öldürmeden burayı atlattın.'
            : '<25>{#p/twinkly}{#f/6}{#v/0}* Demek önüne çıkan herkesin canını bağışladın.',
         '<25>{#f/5}{#v/0}* Eminim harika hissediyorsundur.',
         '<25>{#f/2}{#v/1}* Peki ya bir seri katile denk gelirsen ne yapacaksın?',
         "<25>{#f/9}{#v/0}* Öleceksin, öleceksin, daha da öleceksin...",
         "<25>{#f/5}{#v/0}* Sonrasında, denemekten sıkılacaksın.",
         '<25>{#f/11}{#v/0}* O zaman ne olacak ha?',
         '<25>{#f/2}{#v/1}* Hayal kırıklığından ÖLDÜRMEYE mi başlayacaksın?',
         '<25>{#f/14}{#v/1}* Ya da basitçe PES mi edeceksin?',
         '<25>{#f/11}{#v/0}* Hee hee hee...',
         '<25>{#f/7}{#v/0}* Bu ACAYİP eğlenceli olacak.',
         "<25>{#f/9}{#v/0}* İzliyor olacağım!"
      ],
      endtwinklyBB1: () => [
         SAVE.data.b.w_state_lateleave
            ? "<25>{#p/twinkly}{#f/6}{#v/0}* Demek bazı değersiz kişilerden uzak durmayı başardın."
            : '<25>{#p/twinkly}{#f/6}{#v/0}* Demek bazı değersiz kişilerin canını bağışladın.',
         '<25>{#f/11}{#v/0}* Peki ya diğerleri, ha?',
         '<25>{#f/7}{#v/0}* Froggit, Flutterlyte, Gelatini, Silente, Oculoux, Mushy...',
         "<25>{#f/6}{#v/0}* Onların da bir ailesi yok mu sence?",
         "<25>{#f/8}{#v/0}* Onların da arkadaşları yok mu sence?",
         "<25>{#f/5}{#v/0}* Her biri başkasının Toriel'i olabilirdi.",
         '<25>{#f/5}{#v/0}* ...',
         '<25>{#f/7}{#v/0}* Seni bencil velet.',
         '<25>{#f/0}{#v/1}* Senin yüzünden canavarlar öldü.'
      ],
      endtwinklyBB2: () => [
         SAVE.data.b.w_state_lateleave
            ? "<25>{#p/twinkly}{#f/6}{#v/0}* Demek sadece bir kişinin yolundan çekildin."
            : '<25>{#p/twinkly}{#f/6}{#v/0}* Demek sadece bir kişinin canını bağışladın.',
         '<25>{#f/11}{#v/0}* Peki diğer herkes, ha?',
         '<25>{#f/7}{#v/0}* Froggit, Flutterlyte, Gelatini, Silente, Oculoux, Mushy...',
         "<25>{#f/0}{#v/0}* Onlar artık gitti.",
         "<25>{#f/11}{#v/0}* Peki Toriel bunları öğrendiğinde ne yapacak, ha?",
         '<25>{#f/2}{#v/1}* Ya bunalıma girip kendisini ÖLDÜRÜRSE?',
         "<25>{#f/11}{#v/0}* Eğer onu sadece BAĞIŞLAYARAK kurtardığını sanıyorsan...",
         "<25>{#f/7}{#v/0}* Düşündüğümden de aptalsın demektir.",
         '<25>{#f/9}* Öyleyse, görüşürüz!'
      ],
      endtwinklyBB3: () => [
         SAVE.data.b.w_state_lateleave
            ? "<25>{#p/twinkly}{#f/6}{#v/0}* Demek hemen herkesin yolundan çekilmeyi başardın."
            : '<25>{#p/twinkly}{#f/6}{#v/0}* Demek hemen herkesin canını bağışladın.',
         SAVE.data.b.w_state_lateleave
            ? '<25>{#p/twinkly}{#f/11}{#v/0}* Peki ya o yolundan çekilmediğin canavar, ha?'
            : "<25>{#p/twinkly}{#f/11}{#v/0}* Peki ya o bağışlamadığın canavar, ha?",
         '<25>{#f/7}{#v/0}* Froggit, Flutterlyte, Gelatini, Silente, Oculoux, Mushy...',
         "<25>{#f/6}{#v/0}* Onların da bir ailesi yok mu sence?",
         "<25>{#f/8}{#v/0}* Onların da arkadaşları yok mu sence?",
         "<25>{#f/5}{#v/0}* Öldürdüğün kişi başkasının Toriel'i olabilirdi.",
         '<25>{#f/5}{#v/0}* ...',
         '<25>{#f/7}{#v/0}* Seni bencil velet.',
         "<25>{#f/0}{#v/1}* Senin yüzünden birisi öldü."
      ],
      endtwinklyBC: [
         "<25>{#p/twinkly}{#f/5}{#v/0}* Fakat bunun bilincinde olduğuna çok eminim...",
         "<25>{#f/6}{#v/0}* Hele bir de Toriel'i daha önce öldürmene bakarsak.",
         "<25>{#f/7}{#v/0}* Bu doğru, di mi velet?",
         '<25>{#f/2}{#v/1}* Onu SEN öldürdün.',
         "<25>{#f/7}{#v/0}* Sonra da kötü hissettin...\n* Bu doğru di mi?",
         '<25>{#f/7}{#v/0}* Hee hee hee...',
         "<25>{#f/11}{#v/0}* Bu gücün sadece sende olduğunu mu sanıyorsun?",
         '<25>{#f/6}{#v/0}* Sadece saf azminle, evreni yeniden şekillendirme gücü...',
         '<25>{#f/8}{#v/0}* KAYDETME gücü...',
         '<25>{#f/7}{#v/0}* Biliyor musun, o güç eskiden BENİM gücümdü.',
         '<25>{#f/6}{#v/0}* Anlaşılan SENİN bu dünyayla ilgili emellerin BENİMKİLERİ aşıyor.',
         '<25>{#f/5}{#v/0}* İyi madem.\n* Gücünün tadını çıkarabildiğin kadar çıkar.',
         "<25>{#f/9}{#v/0}* İzliyor olacağım!"
      ],
      endtwinklyC: [
         '<25>{#f/7}{#v/0}* Sonuçta, bu güç eskiden BENİM gücümdü.',
         '<25>{#f/6}{#v/0}* Sadece saf azminle, evreni yeniden şekillendirme gücü...',
         '<25>{#f/8}{#v/0}* KAYDETME gücü...',
         '<25>{#f/6}{#v/0}* Bunu yapabilen tek ben varım sanmıştım.',
         '<25>{#f/6}{#v/0}* Anlaşılan SENİN bu dünyayla ilgili emellerin BENİMKİLERİ aşıyor.',
         '<25>{#f/5}{#v/0}* İyi madem.\n* Gücünün tadını çıkarabildiğin kadar çıkar.',
         "<25>{#f/9}{#v/0}* İzliyor olacağım!"
      ],
      endtwinklyD: [
         "<25>{#p/twinkly}{#f/11}{#v/0}* Sen acayip bir baş belasısın ha?",
         '<25>{#f/8}{#v/0}* Canavarları öldüresiye dövüp, sonra bir anda onları bırakmak...',
         "<25>{#f/7}{#v/0}* Peki senin insafını İSTEMEYEN bir canavara ne yapacaksın?",
         '<25>{#f/6}{#v/0}* Gözlerindeki ışığı mı söndüreceksin?',
         '<25>{#f/5}{#v/0}* Yoksa bu hatalı \"barışçıllığının\" nafile olduğunu mu anlayacaksın?',
         '<25>{#f/11}{#v/0}* Hee hee hee...',
         '<25>{#f/7}{#v/0}* Bu ACAYİP eğlenceli olacak.',
         "<25>{#f/9}{#v/0}* İzliyor olacağım!"
      ],
      endtwinklyE: [
         "<25>{#p/twinkly}{#f/7}{#v/0}* Vay, sen tamamıyla iticisin.",
         '<26>{#f/11}{#v/0}* Barışçıl bir biçimde geçtin...',
         "<25>{#f/5}{#v/0}* Sonra, bunun seni tatmin etmeyeceğine karar verdin.",
         '<25>{#f/2}{#v/1}* O yüzden sırf ne olacağını görmek için onu ÖLDÜRDÜN.',
         '<25>{#f/7}{#v/0}* Hee hee hee...',
         '<25>{#f/0}{#v/0}* Canın SIKILDIĞI için yaptın bunu.'
      ],
      endtwinklyEA: [ "<25>{#f/11}{#v/0}* Bunun nasıl işlediğini bilmiyorum sanma..." ],
      endtwinklyEB: [ "<25>{#f/6}{#v/0}* Yine de bu, üzücü..." ],
      endtwinklyF: [ '<25>{#p/twinkly}{#f/11}{#v/0}* Şu haline bak, onun hayatıyla nasıl da oynuyorsun...' ],
      endtwinklyFA: [ '<25>{#f/7}{#v/0}* Onu öldür, ondan ayrıl, sonra tekrar öldür...' ],
      endtwinklyFB: [ '<25>{#f/7}{#v/0}* Ondan ayrıl, onu öldür, sonra tekrar ayrıl...' ],
      endtwinklyFXA: [
         "<25>{#f/11}{#v/0}* Eğlenceli, değil mi?",
         '<25>{#f/6}{#v/0}* Herkesin hayatıyla durmadan oyuncak gibi oynamak...',
         '<25>{#f/8}{#v/0}* Olası her kararına nasıl tepki vereceklerini seyretmek...',
         "<25>{#f/11}{#v/0}* Çok heyecanlı değil mi?",
         '<25>{#f/7}{#v/0}* Hee hee hee...',
         "<25>{#f/9}{#v/0}* Şimdi ne yapacaksın merak ediyorum.",
         "<25>{#f/5}{#v/0}* İzliyor olacağım..."
      ],
      endtwinklyG: [
         "<25>{#p/twinkly}{#f/10}{#v/0}* Yaptıkça yapasın geliyor değil mi~",
         '<25>{#f/11}{#v/0}* Onu daha kaç defa ÖLDÜRECEKSİN ya?',
         '<25>{#f/7}{#v/0}* Hee hee hee...',
         '<25>{#f/0}{#v/1}* Bana biraz kendimi hatırlatıyorsun.',
         '<25>{#f/9}{#v/0}* Neyse, hadi bay!'
      ],
      endtwinklyG1: [
         '<25>{#p/twinkly}{#f/6}{#v/0}* Yine mi?\n* Tanrım...',
         '<25>{#f/0}{#v/1}* Bana CİDDEN kendimi hatırlatıyorsun.'
      ],
      endtwinklyG2: [
         '<25>{#p/twinkly}{#f/6}{#v/0}* Bir daha mı!?',
         "<25>{#f/8}{#v/0}* Vay be, sandığımdan da beter çıktın sen."
      ],
      endtwinklyH: () => [
         SAVE.data.b.w_state_lateleave
            ? "<25>{#p/twinkly}{#f/5}{#v/0}* Demek sonunda barışçıl barışçıl geçtin, ha?"
            : "<25>{#p/twinkly}{#f/5}{#v/0}* Demek sonunda merhamet etmeyi seçtin, ha?",
         '<25>{#f/5}{#v/0}* Hem de onca ÖLDÜRMEDEN sonra...',
         '<25>{#f/11}{#v/0}* Söylesene, başından beri planın bu muydu?',
         '<25>{#f/2}{#v/1}* Onun ölümünden heyecanlanıp sıkılınca onu bağışlamak.',
         '<25>{#f/7}{#v/0}* Hee hee hee...',
         '<25>{#f/11}{#v/0}* Sen kendini nasıl da ahlaklı görüyorsundur şimdi.',
         "<25>{#f/5}{#v/0}* Ama hey, ben de bunun nasıl işlediğini bilmiyorum değil..."
      ],
      endtwinklyI: [
         '<25>{#p/twinkly}{#f/11}{#v/0}* Hee hee hee...',
         '<25>{#f/7}{#v/0}* Umarım kararından memnun kalmışsındır.',
         "<25>{#f/9}{#v/0}* Yani, geri dönüp kaderini değiştirebilecek değilsin ya.",
         "<25>{#f/0}{#v/1}* Bu dünyada, ya ÖLÜRSÜN ya da ÖLDÜRÜRSÜN.",
         '<25>{#f/5}{#v/0}* O yaşlı kadın kuralları çiğneyebileceğini sandı.',
         '<25>{#f/8}{#v/0}* Siz insanları kurtarmak için çabaladı...',
         "<25>{#f/6}{#v/0}* Ama iş o safhaya geldiğinde kendisini bile kurtaramadı."
      ],
      endtwinklyIX: [
         '<25>{#p/twinkly}{#f/11}{#v/0}* Hee hee hee...',
         '<25>{#f/11}{#v/0}* Nihayet pes edip birisini öldürdün, ha?',
         '<25>{#f/7}{#v/0}* Yani, umarım seçimini beğenirsin.',
         "<25>{#f/9}{#v/0}* Yani, geri dönüp kaderini değiştirebilecek değilsin ya.",
         "<25>{#f/0}{#v/1}* Bu dünyada, ya ÖLÜRSÜN ya da ÖLDÜRÜRSÜN.",
         "<25>{#f/8}{#v/0}* ... sorun ne?\n* Düşündüğün kadar uzun süre dayanamadı mı?",
         '<26>{#f/6}{#v/0}* Ah, ne kadar da kötü.\n* Demek ki herkesi boyun eğene kadar dövemiyormuşuz!'
      ],
      endtwinklyIA: [ '<25>{#f/11}{#v/0}* Ne salak ama!' ],
      endtwinklyIAX: [ '<25>{#f/7}{#v/0}* Onun için ne kadar yazık.' ],
      endtwinklyIB: [ '<25>{#f/6}{#v/0}* Sana gelirsek...' ],
      endtwinklyJ: [
         '<25>{#p/twinkly}{#f/6}{#v/0}* Vay canına.',
         '<25>{#f/7}{#v/0}* Ben de burada senin merhamet ederek erdemli olduğunu sanmıştım.',
         '<25>{#f/11}{#v/0}* Hah!\n* Şakaya gel.',
         '<25>{#f/6}{#v/0}* ...',
         '<25>{#f/6}{#v/0}* Vahşi yanını sonunda tatmin etmek nasıl hissettirdi?',
         '<25>{#f/7}{#v/0}* Hee hee hee...',
         "<25>{#f/0}{#v/1}* Eminim ki İYİDİR, değil mi?",
         '<25>{#f/11}{#v/0}* Yani benim de bilmem gerekir...'
      ],
      endtwinklyK: [
         '<25>{#p/twinkly}{#f/5}{#v/0}* Seni tekrar görmek güzel.',
         "<25>{#f/6}{#v/0}* He bu arada, galaksideki en sıkıcı kişi sensin.",
         '<25>{#f/12}{#v/0}* Barışçıl şekilde geçinmek ve sonra geri dönüp aynı şeyi yapmak mı?',
         '<25>{#f/8}{#v/0}* Hadi ama...',
         "<25>{#f/2}{#v/1}* Bu dünyanın ÖLDÜR ya da ÖL olduğunu benim kadar iyi biliyorsun."
      ],
      endtwinklyK1: [
         "<25>{#p/twinkly}{#f/6}* Bundan hiç sıkılmıyor musun?",
         '<25>{#f/8}{#v/0}* Hadi ama...',
         '<25>{#f/2}{#v/1}* İçinde bir yerde onun canını yakmak istediğini BİLİYORSUN.',
         "<25>{#f/14}{#v/1}* Birkaç sağlam vuruş, ve bir bakmışsın ki ölüp gitmiş.",
         "<25>{#f/11}{#v/0}* Heyecan verici olmaz mıydı?",
         '<25>{#f/6}{#v/0}* ...',
         '<25>{#f/8}{#v/0}* ...',
         '<25>{#f/7}{#v/0}* Görüşürüz, salak.'
      ],
      endtwinklyK2: [
         '<25>{#p/twinkly}{#f/8}{#v/0}* Bunu sırf nasıl tepki vereceğimi görmek için mi yapıyorsun?',
         '<25>{#f/6}{#v/0}* Bütün olay bu mu yani?',
         "<25>{#f/7}{#v/0}* Her neyse, benden başka şeyler söylememi bekleme.",
         '<25>{#f/6}{#v/0}* Bu sıkıcı barışçıllık gerçekten baydı.',
         '<25>{#f/11}{#v/0}* Ancak, daha ilginç bir şey yaşanırsa...',
         "<25>{#f/9}{#v/0}* Konuşmak için daha meyilli olabilirim.",
         '<25>{#f/6}{#v/0}* ...',
         '<25>{#f/8}{#v/0}* ...',
         '<25>{#f/7}{#v/0}* Görüşürüz, salak.'
      ],
      endtwinklyKA: [
         "<25>{#f/7}{#v/0}* Eninde sonunda, bunun farkına varman gerekecek.",
         '<25>{#f/11}{#v/0}* Ve vakit geldiğinde de...',
         "<25>{#f/5}{#v/0}* Neyse, demem o ki neler olacağını dört gözle bekliyorum.",
         '<25>{#f/11}{#v/0}* Hee hee hee...',
         '<25>{#f/9}{#v/0}* Bol şans!'
      ],
      endtwinklyKB: [
         '<25>{#f/11}{#v/0}* Hee hee hee...',
         "<25>{#f/7}{#v/0}* Belki de o yüzden sadece o canavarı öldürdün.",
         '<25>{#f/8}{#v/0}* Yani, kimseyi öldürmeden neredeyse yolun tamamını gittin...',
         '<25>{#f/6}{#v/0}* Ama arada bir yerde, işi mahvettin.',
         '<25>{#f/5}{#v/0}* Sahip olduğun o güzelim karma ziyan oldu.',
         "<25>{#f/11}{#v/0}* Tanrım, hiçbir şeyi doğru düzgün yapamıyorsun!",
         '<25>{#f/11}{#v/0}* Nasıl bir şaka ama!'
      ],
      endtwinklyKC: [
         '<25>{#f/11}{#v/0}* Hee hee hee...',
         "<25>{#f/7}{#v/0}* Belki de o yüzden diğer canavarları öldürdün.",
         '<25>{#f/8}{#v/0}* Yani, iyi gidiyordun ama...',
         "<25>{#f/6}{#v/0}* Eğer bir anlamı yoksa insafın amacı nedir ki?",
         '<25>{#f/7}{#v/0}* Ve inan bana, yaptığın o şeyden sonra...',
         "<25>{#f/2}{#v/1}* HİÇBİR anlamı yok.",
         '<25>{#f/6}{#v/0}* ...',
         '<25>{#f/8}{#v/0}* ...',
         '<25>{#f/7}{#v/0}* Görüşürüz, salak.'
      ],
      endtwinklyKD: [
         "<25>{#f/11}{#v/0}* Toriel'i öldürmekte sorunun mu var, ha?\n* Çok mu vicdanlısın onun için?",
         '<25>{#f/7}{#v/0}* Hee hee hee...',
         "<25>{#f/2}{#v/1}* Senin temelden çürük olduğunu biliyorum ben.",
         '<25>{#f/11}{#v/0}* Yani, önüne çıkan herkesi devirmeyi başardın...',
         '<25>{#f/6}{#v/0}* Ama iş son engele gelince, başaramadın.',
         "<25>{#f/11}{#v/0}* Tanrım, hiçbir şeyi doğru düzgün yapamıyorsun!",
         '<25>{#f/11}{#v/0}* Nasıl bir şaka ama!'
      ],
      endtwinklyL: [
         '<25>{#p/twinkly}{#f/6}{#v/0}* Geri döndün, ha?\n* Tanrım...',
         "<25>{#f/8}{#v/0}* Zaman çizelgesini o kadar çok elledin ki...",
         "<25>{#f/6}{#v/0}* Artık ne düşüneceğimi bilmiyorum.",
         '<25>{#f/8}{#v/0}* Sen iyi misin?\n* Kötü müsün?\n* Yoksa sadece meraklı mısın?',
         '<25>{#f/6}{#v/0}* Bilemedim ki.',
         '<25>{#f/5}{#v/0}* Ama sadece tek bir şey var...',
         "<25>{#f/5}{#v/0}* Hala yapmadığın o tek şeyi BİLİYORUM.",
         '<25>{#f/11}{#v/0}* Hee hee hee...',
         "<25>{#f/7}{#v/0}* Evet doğru.",
         "<25>{#f/7}{#v/0}* Buradaki herkesi tek seferde öldürmedin.",
         "<25>{#f/11}{#v/0}* BİRAZ bile meraklı değil misin?",
         '<25>{#f/8}{#v/0}* Hadi ama, $(name)...',
         "<25>{#f/5}{#v/0}* Oralarda bir yerlerdesin biliyorum."
      ],
      endtwinklyL1: [
         '<25>{#p/twinkly}{#f/6}{#v/0}* Bak sen, yine karşılaştık.',
         '<25>{#f/8}{#v/0}* Bu kaçıncı etti?',
         "<25>{#f/6}{#v/0}* Aman neyse.\n* Bir önemi yok.",
         '<25>{#f/6}{#v/0}* Sen ne yapman gerektiğini BİLİYORSUN, $(name).',
         '<25>{#f/8}{#v/0}* ...',
         "<25>{#f/5}{#v/0}* Bekliyor olacağım."
      ],
      exit1: [
         '<25>{#p/toriel}{#f/13}* \"Eve\" dönmeyi diliyorsun, öyle değil mi?',
         '<25>{#f/9}* ...',
         '<25>{#f/9}* Eğer burayı terk edecek olursan, seni koruma imkanım olmayacak.',
         '<25>{#f/9}* Seni ilerideki tehlikelerden kurtarma imkanım olmayacak.',
         '<25>{#f/13}* O yüzden, lütfen, ufaklık...',
         '<25>{#f/9}* Diğer yoldan geri dön.'
      ],
      exit2: [
         '<25>{#p/toriel}{#f/13}* Buraya gelen her insan aynı kaderle karşılaşıyor.',
         '<25>{#f/9}* Bunun defalarca tekrarlandığını gördüm.',
         '<25>{#f/13}* Onlar geliyorlar.',
         '<25>{#f/13}* Ayrılıyorlar.',
         '<25>{#f/9}* ... ölüyorlar.',
         '<25>{#f/13}* Çocuğum...',
         '<25>{#f/13}* Eğer Outlands\'i terk edersen...',
         '<25>{#f/9}* Onlar...\n* {@fill=#f00}ASGORE{@fill=#fff}...\n* Senin RUH\'unu alacak.'
      ],
      exit3: [
         '<25>{#p/toriel}{#f/9}* ...',
         '<25>{#f/13}* Bunu söylemek istemezdim ama...',
         '<25>{#f/11}* Bu yoldan devam etmene izin veremem.',
         '<25>{#f/9}* Kendi iyiliğin için, çocuk...',
         '<25>{#f/9}* Beni bir sonraki odaya takip etme.'
      ],
      exit4: [
         '<25>{#p/toriel}{#p/toriel}{#f/13}* ...',
         '<25>{#f/10}* ... tabii ki.',
         '<25>{#f/9}* Belki de her şeyin bu noktaya geleceği zaten belliydi.',
         '<25>{#f/9}* Belki de senin farklı olacağını düşünmem ahmakça bir düşünceydi.',
         '<25>{#f/9}* ...',
         '<25>{#f/13}* Korkarım artık pek fazla seçeneğim yok.',
         '<25>{#f/13}* Affet beni, çocuğum...',
         '<25>{#f/11}* Ama senin gitmene izin veremem.'
      ],
      exitfail1: (lateleave: boolean, sleep: boolean) =>
         world.postnoot
            ? [
                 [
                    sleep
                       ? "<32>{#p/twinkly}{#f/19}* After you sleep at Mommy's house, she goes out for groceries."
                       : "<32>{#p/twinkly}{#f/19}* After you run back to Mommy's house, she goes out for groceries.",
                    '<32>{#x1}* But... oh no!\n* The taxi she was in exploded, killing her instantly!',
                    '<32>* Golly, I wonder how such an awful thing could have happened.',
                    '<32>{*}{#x2}* ...',
                    "<25>{*}{#f/7}* Sorry, $(name).\n* Guess your happy ending won't be so easy."
                 ],
                 [
                    sleep
                       ? "<32>{#p/twinkly}{#f/19}* After you sleep at Mommy's house, she goes out for groceries."
                       : "<32>{#p/twinkly}{#f/19}* After you run back to Mommy's house, she goes out for groceries.",
                    '<32>{#x1}* But... oh no!\n* A talking star appears and tortures her to death!',
                    "<32>* Golly, that's an even worse outcome than last time!",
                    '<32>{*}{#x2}* ...',
                    "<25>{*}{#f/6}* We don't have time for this, $(name).\n* Get back on track."
                 ],
                 [
                    '<25>{*}{#p/twinkly}{#f/5}* Come on, $(name)...',
                    sleep
                       ? "<25>{*}{#f/7}* Do you really think I'm gonna let you avoid me THAT easily?"
                       : "<25>{*}{#f/7}* Do you really think I'm gonna let you run away from me THAT easily?"
                 ],
                 [ '<25>{*}{#p/twinkly}{#f/6}* We can do this all day.' ],
                 [ '<25>{*}{#p/twinkly}{#f/8}* ...' ]
              ][Math.min(SAVE.flag.n.postnoot_exitfail++, 4)]
            : [
                 sleep
                    ? "<32>{#p/basic}* Toriel'in evinde uyuduktan sonra, o karakola giden köprüyü yok ediyor."
                    : "<32>{#p/basic}* Toriel'in evine döndükten sonra, o karakola giden köprüyü yok ediyor.",
                 ...(outlandsKills() > 10
                    ? [
                         "<32>* Zaman geçiyor, ve Toriel çok geçmeden canavarları öldürdüğünü öğreniyor.",
                         '<32>* Her hopes shattered, and with nothing left to lose, she...',
                         '<32>* ...',
                         '<32>* ... m-meanwhile, the remaining outpost residents await salvation...'
                      ]
                    : outlandsKills() > 5 || SAVE.data.n.bully_wastelands > 5
                    ? [
                         '<32>* Time goes by, and Toriel does her best to care for you.',
                         '<32>* Reading books, baking pies...',
                         '<32>* Tucking you snugly into bed, each and every night...',
                         ...(lateleave
                            ? [ '<32>* ... despite her fear that you may try to run away again.' ]
                            : [ "<32>* ... despite those who've gone missing." ]),
                         '<32>* Tüm bu sırada, karakol sakinleri kurtuluşu bekliyor...'
                      ]
                    : [
                         '<32>* Time goes by, and Toriel does her best to care for you.',
                         '<32>* Reading books, baking pies...',
                         '<32>* Tucking you snugly into bed, each and every night...',
                         ...(lateleave
                            ? [ '<32>* Ve sana sıkıca sarılıyor, böylece bir daha asla ama alsa kaçmaya çalışmazsın.' ]
                            : [ '<32>* And all the hugging you could ever hope for.' ]),
                         '<32>* Tüm bu sırada, karakol sakinleri kurtuluşu bekliyor...'
                      ]),
                 '<32>* ... kendilerine asla erişemeyecek bir insandan.',
                 '<32>* Gerçekten elde etmeyi umduğun sonuç bu muydu?',
                 '<32>* Gerçekten onların hak ettikleri bu mu?'
              ],
      food: () => [
         ...(SAVE.data.n.state_wastelands_mash === 2
            ? [
                 '<25>{#p/toriel}{#f/1}* Beklettiğim için üzgünüm...',
                 '<25>{#f/3}* Görünüşe göre o küçük beyaz köpek yine mutfağımı bastı.',
                 '<25>{#f/4}* O turtanın halini görmelisin...',
                 '<26>{#f/0}* Ama her neyse.\n* Senin için bir kızarmış salyangoz tabağı hazırladım.'
              ]
            : [ '<25>{#p/toriel}* Kahvaltı hazır!', '<26>* Senin için bir kızarmış salyangoz tabağı hazırladım.' ]),
         '<25>{#f/1}* Bunları burada masanın üzerinde bırakacağım...'
      ],
      fridgetrap: {
         a: () =>
            SAVE.data.b.svr
               ? []
               : world.darker
               ? [ "<32>{#p/basic}* Buzdolabında olan şeyi beğenmezdin." ]
               : [ '<32>{#p/basic}* Buzdolabında marka adı olan bir çikolata var.' ],
         b: () => [
            ...(SAVE.data.b.svr ? [] : [ '<32>{#p/basic}* ...', '<32>* İstiyor musun?' ]),
            choicer.create('* (Take the Chocolate Bar?)', 'Evet', 'Hayır')
         ],
         b1: [ '<32>{#p/human}* (You decide not to take anything.)' ],
         b2: () => [
            '<32>{#p/human}* (You got the Chocolate Bar.)',
            ...(SAVE.data.b.svr ? [ '<25>{#p/asriel1}{#f/17}* Ah... chocolate.', '<25>{#p/asriel1}{#f/13}* ...' ] : [])
         ],
         c: () =>
            SAVE.data.b.svr
               ? [
                    '<32>{#p/human}* (But there was nothing left to find within.)',
                    ...[
                       [
                          '<25>{#p/asriel1}{#f/23}* Oh... $(name) ALWAYS used to root around in the fridge.',
                          '<25>{#f/13}* They thought, if they dug deep enough...',
                          '<25>{#f/13}* Another bar of chocolate would reveal itself inside.',
                          '<25>{#f/17}* ... how silly.'
                       ],
                       [ '<25>{#p/asriel1}{#f/20}* That was before the chocolate replicator was installed.' ]
                    ][Math.min(asrielinter.fridgetrap_c++, 1)]
                 ]
               : [ '<32>{#p/basic}* The chocolate bar has already been taken.' ],
         d: [ "<32>{#p/human}* (You're carrying too much.)" ]
      },
      front1: [
         '<25>{#p/toriel}{#f/1}* ... ve şarkılarından birini mi çalmak istiyorsun?',
         '<25>{#f/0}* Pekala, ne yapabileceğime bir bakacağım.'
      ],
      front1x: [ '<25>{#p/toriel}{#f/1}* ... merhaba?' ],
      front2: () => [
         ...(world.postnoot
            ? [
                 '<25>{#p/toriel}{#f/2}* Çoktan kalktın mı!?',
                 '<25>{#f/1}* Çok uzun süre uyumadın...',
                 '<25>{#f/5}* ...',
                 world.nootflags.has('toriel') // NO-TRANSLATE

                    ? '<25>{#f/1}* Atmosferik sistem hala düzelmiş görünmüyor.'
                    : '<25>{#f/1}* Atmosferik sistem arızalanıyor gibi görünüyor.',
                 '<25>{#f/1}* Kendini güçsüz hissetmeye başlarsan, yatağa dönmekten çekinme.',
                 '<26>{#f/0}* ... her neyse.'
              ]
            : [
                 '<25>{#p/toriel}{#f/2}* Ne kadar zamandır orada duruyorsun!?',
                 '<25>{#f/5}* ...',
                 '<25>{#f/0}* Sanıyorum ki bir önemi yok.'
              ]),
         '<25>{#f/0}* Napstablook, buradaki bir ziyaretçi, müziğini çalmayı teklif etti.',
         '<25>{#f/0}* Aslında, özellikle seni sahnede olman için davet etti!',
         '<25>{#f/1}* Onu görmek için aktivite odasını ziyaret etmek ister misin?',
         ...(SAVE.data.n.state_wastelands_mash === 1
            ? [
                 '<25>{#f/3}* Ah, ayrıca, turtanın durumu için özür diliyorum.',
                 '<25>{#f/4}* Görüşüne bakılırsa o küçük beyaz köpek yine mutfağımı basmış...'
              ]
            : 3 <= SAVE.data.n.cell_insult
            ? [
                 '<25>{#f/5}* Ah, ayrıca, turtanın durumu için özür diliyorum.',
                 '<25>{#f/9}* Onu kurtarmak için elimden geleni yaptım...'
              ]
            : []),
         choicer.create("* (Napstablook'un gösterisini izleyecek misin?)", 'Evet', 'Hayır')
      ],
      front2a: [ '<25>{#p/toriel}{#f/0}* Muhteşem!\n* Ona geleceğini haber vereceğim.' ],
      front2b: [ '<25>{#p/toriel}{#f/5}* ...', '<25>{#p/toriel}{#f/5}* Eğer bana ihtiyacın olursa oturma odasında olacağım.' ],
      front3: () => [
         ...(world.postnoot
            ? [
                 '<25>{#p/toriel}{#f/0}* Ah, merhaba, ufaklık.\n* Erken kalkmışsın.',
                 '<25>{#f/1}* Yeterince uzun süre uyuduğundan emin misin?',
                 '<25>{#f/5}* ...',
                 world.nootflags.has('toriel') // NO-TRANSLATE

                    ? '<25>{#f/1}* Atmosferik sistem hala düzelmiş görünmüyor.'
                    : '<25>{#f/1}* Atmosferik sistem arızalanıyor gibi görünüyor.',
                 '<25>{#f/1}* Kendini güçsüz hissetmeye başlarsan, yatağa dönmekten çekinme.',
                 '<26>{#f/0}* ... bunun dışında...'
              ]
            : [ '<25>{#p/toriel}* Günaydın, ufaklık.' ]),
         ...(SAVE.data.n.state_wastelands_mash === 1
            ? [
                 '<25>{#f/3}* Görünüşe göre o küçük beyaz köpek yine mutfağımı bastı.',
                 '<25>{#f/4}* O turtanın halini görmelisin...',
                 '<25>{#f/0}* Yine de, onu senin için kurtarmak için elimden geleni yaptım.'
              ]
            : [ '<25>{#f/1}* Bugün yıldızlar çok güzel görünüyor, değil mi?' ]),
         '<25>{#f/5}* ...',
         '<25>{#f/5}* Eğer bana ihtiyacın olursa oturma odasında olacağım.'
      ],
      front4: () => [
         ...(world.postnoot
            ? [
                 '<25>{#p/toriel}{#f/0}* Ah, merhaba, ufaklık.\n* Erken kalkmışsın.',
                 '<25>{#f/1}* Yeterince uzun süre uyuduğundan emin misin?',
                 '<25>{#f/5}* ...',
                 world.nootflags.has('toriel') // NO-TRANSLATE

                    ? '<25>{#f/1}* Atmosferik sistem hala düzelmiş görünmüyor.'
                    : '<25>{#f/1}* Atmosferik sistem arızalanıyor gibi görünüyor.',
                 '<25>{#f/1}* Kendini güçsüz hissetmeye başlarsan, yatağa dönmekten çekinme.'
              ]
            : [ '<25>{#p/toriel}* Günaydın, ufaklık.' ]),
         '<25>{#f/5}* ...',
         ...(world.bullied
            ? [
                 '<25>* Outlands bugün alışılmadık derecede gürültülüydü.',
                 '<25>* Görünüşe göre bir zorba ortalıkta dolaşıyor ve sorun çıkarıyormuş...',
                 '<25>* Buradan çok uzaklaşmamak en iyisi olurdu.'
              ]
            : [
                 '<25>* Outlands bugün alışılmadık derecede sessizdi.',
                 '<25>* Tam da şimdi birini aramayı denedim, ama...',
                 '<25>* Hiçbir şey yok.'
              ]),
         ...(SAVE.data.n.state_wastelands_mash === 1
            ? [
                 world.bullied
                    ? '<26>{#f/3}* Ayrıca, o küçük beyaz köpek yeniden mutfağıma dalmış.'
                    : '<25>{#f/3}* Mutfağımı basan küçük beyaz köpek hariç, tabii ki.',
                 '<25>{#f/4}* O turtanın halini görmelisin...',
                 '<25>{#f/0}* Yine de, onu senin için kurtarmak için elimden geleni yaptım.',
                 '<25>{#f/1}* Umarım beğenirsin...'
              ]
            : world.bullied || (16 <= outlandsKills() && SAVE.flag.n.genocide_twinkly < resetThreshold())
            ? []
            : [ '<25>{#f/1}* Bu oldukça endişe verici...' ]),
         '<25>{#f/0}* Her halükarda, bana ihtiyacın olursa oturma odasında olacağım.'
      ],
      goodbye1a: [ '<25>{#p/toriel}{#f/10}* ...', '<25>{#f/20}{|}* Gel buraya- {%}' ],
      goodbye1b: [ '<25>{#p/toriel}{#f/9}* ...', '<25>{#f/19}{|}* Gel buraya- {%}' ],
      goodbye2: [
         '<25>{#p/toriel}{#f/5}* Sana yaşattıklarım için özür dilerim, ufaklık.',
         '<25>{#f/9}* Seni burada sonsuza kadar tutamayacağımı bilmeliydim.',
         '<25>{#f/5}* ... yine de, eğer konuşacak birine ihtiyacın olursa...',
         '<25>{#f/1}* Beni istediğin zaman arayabilirsin.',
         '<25>{#f/0}* Telefonum sana ulaşabildiği sürece, açmak için orada olacağım.'
      ],
      goodbye3: [
         '<25>{#p/toriel}{#f/5}* Sana yaşattıklarım için özür dilerim, ufaklık.',
         '<25>{#f/9}* Seni burada sonsuza kadar tutamayacağımı bilmeliydim.',
         '<25>{#f/10}* ...',
         '<25>{#f/14}* İyi ol, olur mu?'
      ],
      goodbye4: [ '<25>{#p/toriel}{#f/1}* İyi ol, olur mu?' ],
      goodbye5a: [
         '<25>{#p/toriel}{#f/5}* ... hmm?\n* Fikrini mi değiştirdin?',
         '<25>{#f/9}* ...',
         '<25>{#f/10}* Belki de sen gerçekten diğerlerinden farklısındır.',
         '<25>{#f/0}* ... peki öyleyse.',
         '<25>{#f/0}* Buradaki işimi halledip seninle evde buluşacağım.',
         '<25>{#f/0}* Dinlediğin için teşekkür ederim, çocuğum.',
         '<25>{#f/0}* Bu benim için çok şey ifade ediyor.'
      ],
      goodbye5b: [
         '<25>{#p/toriel}{#f/5}* ... hmm?\n* Fikrini mi değiştirdin?',
         '<25>{#f/10}* ...\n* Affet beni, çocuğum.',
         '<25>{#f/9}* Bir anlığına kendimi kaybetmiş olabilirim.',
         '<25>{#f/0}* ... önemi yok.',
         '<25>{#f/0}* Buradaki işimi halledip seninle evde buluşacağım.',
         '<25>{#f/0}* Dinlediğin için teşekkür ederim, çocuğum.',
         '<25>{#f/0}* Bu benim için çok şey ifade ediyor.'
      ],
      halo: {
         a: () => [ '<32>{#p/human}* (You got the Halo.)', choicer.create('* (Equip the Halo?)', 'Evet', 'Hayır') ],
         b: [ "<32>{#p/human}* (You're carrying too much to take that.)" ]
      },
      indie1: () => [
         ...([ 1, 5 ].includes(SAVE.data.n.state_wastelands_dummy) && SAVE.data.b.w_state_riddleskip
            ? [
                 '<25>{#p/toriel}{#f/5}* Şimdiye kadar sana öğretmek zordu, ama...',
                 '<25>{#f/5}* Belki de bu egzersiz yardımcı olacaktır.'
              ]
            : [ '<26>{#p/toriel}* Pekala.\n* Üçüncü ve son dersinin zamanı geldi.' ]),
         '<25>{#f/1}* Bu odanın sonuna kadar...',
         '<25>{#f/1}* ... tek başına gidebileceğini düşünüyor musun?',
         choicer.create('* (Ne diyeceksin?)', 'Evet', 'Hayır')
      ],
      indie1a: () => [
         '<25>{#p/toriel}{#f/1}* Emin misin...?',
         '<25>{#f/0}* Yalnızca kısa bir mesafe uzaklıkta.',
         choicer.create('* (Fikrini değiştirecek misin?)', 'Evet', 'Hayır')
      ],
      indie1b: () => [
         '<25>{#p/toriel}{#f/5}* Çocuğum.',
         '<25>{#f/1}* İşleri KENDİ başına yapman önemlidir, öyle değil mi?',
         '<32>{#p/basic}* Eğer şimdi fikrini değiştirmezsen, Toriel seni eve götürmeye karar verebilir.',
         choicer.create('* (Fikrini değiştirecek misin?)', 'Evet', 'Hayır')
      ],
      indie2a: [ '<25>{#p/toriel}{#f/1}* Pekala...', '<25>{#f/0}* Bol şans!' ],
      indie2b: [ '<25>{#p/toriel}{#f/5}* ...', '<25>{#f/9}* ... Anlıyorum.' ],
      indie2b1: [
         '<25>{#p/toriel}{#f/10}* Endişelenme, çocuğum.',
         '<25>{#f/1}* Eğer gerçekten yanımdan ayrılmak istemiyorsan...',
         '<25>{#f/0}* Outlands\'in geri kalanında sana rehberlik edeceğim.',
         '<25>{#f/5}* ...',
         '<25>{#f/5}* Elimi tut, ufaklık...',
         '<25>{#f/5}* Eve gitme zamanı.'
      ],
      indie2f: [ '<32>{#p/human}{#s/equip}* (You got the CELL.)' ],
      indie3a: [ '<25>{#p/toriel}* Başardın!' ],
      indie3b: [
         '<25>{#p/toriel}{#f/3}* Çocuğum, neden bu kadar geciktin!?',
         '<25>{#f/4}* Kayıp mı oldun?',
         '<25>{#f/1}* ...\n* İyi görünüyorsun...'
      ],
      indie4: () => [
         ...([ 1, 5 ].includes(SAVE.data.n.state_wastelands_dummy) && SAVE.data.b.w_state_riddleskip
            ? [
                 '<25>{#f/0}* Kabul etmeliyim ki, sonuna kadar gelebilmene şaşırdım.',
                 '<25>{#f/3}* Şimdiye kadar ki tavrın aklımda bir soru işareti bıraktı...',
                 '<25>{#f/4}* ... bunca zamandır benimle uğraşmaya mı çalışıyordun?',
                 '<25>{#f/23}* Açıkça söylemek gerekirse, böyle lüzumsuz işlere ayıracak vaktim yok.'
              ]
            : [
                 '<25>{#p/toriel}{#f/0}* Endişelenme.\n* Hiçbir zaman gerçek bir tehlike içinde olmadın.',
                 '<25>{#f/0}* Bu yalnızca bağımsızlığının bir sınavıydı!',
                 '<25>{#f/1}* Dürüst olmak gerekirse, çocuğum...'
              ]),
         '<25>{#f/5}* Yapmam gereken bazı önemli günlük işler var.',
         '<25>{#f/0}* Ben yokken, senden en iyi tutumunu korumanı bekliyorum.',
         '<25>{#f/1}* İlerideki bulmacaların açıklanmaları gerekiyor, ve...',
         '<25>{#f/0}* Bu odadan tek başına ayrılman tehlikeli olabilir.',
         '<25>{#f/10}* İşte.\n* Bu CEP telefonunu al.',
         '<32>{#p/human}{#s/equip}* (You got the CELL.)',
         ...([ 1, 5 ].includes(SAVE.data.n.state_wastelands_dummy) && SAVE.data.b.w_state_riddleskip
            ? [
                 '<25>{#p/toriel}{#f/1}* Ben yokken bir şeye ihtiyacın olursa, lütfen...',
                 '<25>{#f/0}* Beni aramaktan çekinme.',
                 '<25>{#f/5}* ...',
                 '<26>{#f/23}* And stay out of trouble.'
              ]
            : [
                 '<25>{#p/toriel}{#f/1}* Ben yokken bir şeye ihtiyacın olursa, lütfen...',
                 '<25>{#f/0}* Beni aramaktan çekinme.',
                 '<25>{#f/5}* ...',
                 '<25>{#f/1}* İyi ol, tamam mı?'
              ])
      ],
      indie5: [
         [
            '<32>{#s/phone}{#p/event}* Zırr, zırr...',
            '<25>{#p/toriel}* Merhaba!\n* Bu Toriel.',
            '<25>* Günlük işlerim düşündüğümden daha uzun sürüyor.',
            '<25>* Biraz daha beklemen gerekecek.',
            '<25>{#f/1}* Sabırlı olduğun için teşekkür ederim, çocuğum...',
            '<25>{#f/0}* Çok iyisin.'
         ],
         [
            '<32>{#s/phone}{#p/event}* Zırr, zırr...',
            '<25>{#p/toriel}* Merhaba...\n* Bu Toriel.',
            '<25>{#f/1}* Aradığım şeyi buldum...',
            '<25>{#f/0}* Ama küçük, beyaz bir köpek yavrusu onu kaptı!\n* Ne kadar da tuhaf.',
            '<25>{#f/1}* Köpekler unu seviyor mu ki?',
            '<25>{#f/0}* Imm, bu konu ile alakasız bir soru, tabii.',
            '<25>* Geri dönmem biraz daha uzun sürecek.',
            '<25>{#f/1}* Bu kadar sabırlı olduğun için tekrardan teşekkürler...'
         ],
         [
            '<32>{#s/phone}{#p/event}* Zırr, zırr...',
            '<32>{#p/basic}* (...)',
            '<32>{#p/human}* (Telefonun diğer ucundan ağır soluk alıp verme sesleri duyuyorsun.)',
            '<32>{#s/bark}{#p/event}* Hav!\n{#s/bark}* Hav!',
            '<32>{#p/human}* (Uzaktan bir ses duyuyorsun.)',
            '<25>{#p/toriel}{#f/2}* Dur, lütfen!',
            '<32>{#s/bark}{#p/event}* Hav!\n{#s/bark}* Hav!',
            '<25>{#p/toriel}{#f/1}* Cep telefonum ile buraya geri gel!'
         ],
         [
            '<32>{#s/phone}{#p/event}* Zırr, zırr...',
            '<32>{#p/basic}* (...)',
            '<32>{#p/human}* (Küçük, beyaz bir köpeğin telefonda uyuduğu duyuluyor.)',
            '<32>{#p/basic}* (Horr... horr...)',
            '<32>{#p/human}* (Uzaktan bir ses duyuyorsun.)',
            '<25>{#p/toriel}{#f/1}* Merhabaaa?\n* Küçük köpek yavrusu...?',
            '<25>{#f/1}* Neredesiiin?',
            '<25>{#f/0}* Başını güzelce seveceğim!',
            '<32>{#p/human}* (Horlama durur.)',
            '<25>{#p/toriel}* ... eğer cep telefonum ile dönersen.',
            '<32>{#p/human}* (Horlama devam eder.)'
         ],
         [
            '<32>{#s/phone}{#p/event}* Zırr, zırr...',
            '<32>{#p/basic}* (...)',
            '<32>{#p/basic}* (Hapşu!)',
            '<32>{#p/human}* (Uykusunda hapşıran küçük, beyaz bir köpeğin sesi duyuluyor.)',
            '<25>* (Uzaktan bir ses duyuyorsun.)',
            '<25>{#p/toriel}{#f/1}* Aha!\n* Duydum onu, seni küçük beyaz köpek...',
            '<25>{#f/6}* Şimdi seni bulacağım!',
            '<32>{#p/human}* (Horlama durur.)\n* (Köpeğin artık bir şeyden kaçtığı anlaşılıyor.)',
            '<25>{#p/toriel}{#f/8}* Hee hee, burada kaçış yok!'
         ],
         [
            '<32>{#s/phone}{#p/event}* Zırr, zırr...',
            '<32>{#p/human}* (Uzaktan bir ses duyuyorsun.)',
            '<25>{#p/toriel}{#f/1}* Merhaba...\n* Bu... Toriel...',
            '<32>{#s/bark}{#p/event}* Hav!\n* Hav!',
            '<25>{#p/toriel}{#f/2}* Hayır, kötü köpek yavrusu!',
            '<32>{#p/basic}* (Acıklı iç çeker...)',
            '<25>{#p/toriel}* İşte, işte...\n* Sana başka bir cep telefonu bulacağım.',
            '<25>{#f/1}* Bu uygun olur muydu?',
            '<32>{#p/basic}* (...)',
            '<32>{#s/bark}{#p/event}* Hav!',
            '<25>{#p/toriel}* Bunu duyduğuma sevindim.',
            '<32>{#p/human}* (Köpeğin uzaklaştığı duyulabiliyordu.)',
            '<25>{#p/toriel}* Lütfen, tüm bu saçmalıklar için beni affet.',
            '<25>{#f/1}* En kısa zamanda seni almaya geleceğim...'
         ]
      ],
      indie6: (early: boolean) => [
         '<32>{#s/phone}{#p/event}* Zırr, zırr...',
         ...([ 1, 5 ].includes(SAVE.data.n.state_wastelands_dummy) && SAVE.data.b.w_state_riddleskip
            ? [
                 early
                    ? '<25>{#p/toriel}{#g/torielTired}* ... şimdiden mi?'
                    : '<25>{#p/toriel}{#g/torielTired}* ... sabırsızız, öyle mi?',
                 '<25>{#f/9}* Aslında gerçekten şaşırmamalıyım.',
                 '<25>{#f/5}* Sadece dışarıda seni bekleyen tehlikeleri hatırla...',
                 '<25>{#f/1}* Yaralanacak olman çok yazık olurdu.'
              ]
            : [
                 '<25>{#p/toriel}* Merhaba?\n* Bu Toriel.',
                 '<25>{#f/1}* Henüz odadan çıkmadın, değil mi?',
                 '<25>{#f/0}* Dışarıda çok fazla tehlike var, ve senin yaralanmanı istemiyorum.',
                 '<25>{#f/1}* Kendine dikkat et, tamam mı?'
              ])
      ],
      indie7: [ '<32>{#p/basic}* Birkaç dakika sonra...' ],
      indie8: [
         '<25>{#p/toriel}* Geri döndüm!',
         '<25>* Şimdiye kadar gösterdiğin sabır takdire şayandı.\n* Ben bile etkilendim!',
         '<25>{#f/0}* Her neyse.\n* Artık seni eve götürmemin zamanı geldi.',
         '<25>{#f/1}* Lütfen, bana izin ver...'
      ],
      lobby_puzzle1: [
         '<25>{#p/toriel}{#f/0}* Bizim mütevazı karakolumuza hoş geldin, masum insan.',
         '<25>{#f/0}* Buradaki hayata dair sana öğretmem gereken çok ders var.',
         '<25>{#f/1}* Her şeyden önce...',
         '<25>{#f/0}* Bulmacalar!',
         '<25>{#f/0}* Sana kısa bir görselleştirme yapmama izin ver.'
      ],
      lobby_puzzle2: [
         '<25>{#p/toriel}{#f/1}* Şu anda sana garip görünebilir ama burada, karakolda...',
         '<25>{#f/0}* Bulmaca çözmek bizim günlük rutinimizin bir parçasıdır.',
         '<25>{#f/0}* Biraz zaman ve rehberlik ile, bunlara alışacaksın.'
      ],
      lobby_puzzle3: [ '<25>{#p/toriel}* Hazır olduğunda devam edebiliriz.' ],
      loox: {
         a: [
            "<32>{#p/basic}{#n1}* I heard you're quite flirty, for a human.",
            "<32>* As you {@fill=#cf7fff}FLIRT{@fill=#fff} with different kinds of monsters, you'll see hearts next to their names.",
            "<32>* The more types of monsters you {@fill=#cf7fff}FLIRT{@fill=#fff} with, the more hearts you'll have.",
            '<32>* I wonder...',
            '<32>* Just how far can you go?',
            '<32>* Perhaps, my friend, you could even become... a legend.'
         ],
         b: [
            '<32>{#p/basic}{#n1}* Hey human, have you tried flirting yet?',
            "<32>* Ha!\n* I can tell by the look on your face that you haven't yet.",
            "<32>* I gotta tell you, it's tons of fun.",
            "<32>* Your enemies won't know what to do with themselves!",
            '<32>* Psst... if you DO start flirting, I might have more to tell you.',
            '<32>* Good luck with that!'
         ],
         c: [
            "<32>{#p/basic}{#n1}* Hey human, now that you've started flirting...",
            '<32>* How does it feel?',
            "<32>* It's pretty great, right?",
            "<32>* As you {@fill=#cf7fff}FLIRT{@fill=#fff} with different kinds of monsters, you'll see hearts next to their names.",
            "<32>* The more types of monsters you {@fill=#cf7fff}FLIRT{@fill=#fff} with, the more hearts you'll have.",
            '<32>* I wonder...',
            '<32>* Just how far can you go?',
            '<32>* Perhaps, my friend, you could even become... a legend.'
         ],
         d: [
            "<32>{#p/basic}{#n1}* I hear you're somewhat of a bully in these parts.",
            '<32>* Ha!\n* Join the club, pal.',
            "<32>* You're talking to the number one bully around.",
            "<32>* As you {@fill=#3f00ff}BULLY{@fill=#fff} different kinds of monsters, you'll see swords next to their names.",
            "<32>* The more types of monsters you {@fill=#3f00ff}BULLY{@fill=#fff}, the more swords you'll have.",
            '<32>* Though, as a disclaimer, not ALL monsters can be bullied.',
            "<32>* It's like flirting... but with death.",
            '<32>* Fun, right?'
         ],
         e: pager.create(
            0,
            () => [
               ...(30 <= SAVE.data.n.bully
                  ? [
                       "<32>{#p/basic}{#n1}* I heard you're quite the bully around here now.",
                       "<32>* Everyone's afraid of you, huh?"
                    ]
                  : 20 <= world.flirt
                  ? [
                       "<32>{#p/basic}{#n1}* I heard you're quite the romantic around here now.",
                       '<32>* Everyone loves you, huh?'
                    ]
                  : [
                       "<32>{#p/basic}{#n1}* I heard you're quite the hero around here now.",
                       '<32>* Everyone likes you, huh?'
                    ]),
               '<32>* Well... personally, I think you have too much free time.'
            ],
            [ '<32>{#p/basic}{#n1}* What?\n* Am I wrong?' ]
         )
      },
      manana: {
         a: pager.create(
            0,
            () =>
               SAVE.data.b.napsta_performance
                  ? [
                       "<32>{#p/basic}{#n1}* So, you're the one who co-hosted that music show, eh?",
                       "<32>* Maybe now you'll have the means to accept my offer.",
                       "<32>* I'm just lookin' for someone to buy this limited edition Super Starwalker comic strip.",
                       "<32>* Now I liked that little show, so you'll get a discount.\n* 5G, take it or leave it.",
                       choicer.create('{#n1!}* (Buy the Super Starwalker 1 for 5G?)', 'Evet', 'Hayır')
                    ]
                  : [
                       ...(world.postnoot
                          ? [
                               "<32>{#p/basic}{#n1}* Hey, have you noticed anything strange goin' on around here?",
                               "<32>* I could'a sworn all the puzzles just de-activated themselves earlier.",
                               "<32>* Anyway, I'm lookin' for a buyer on this limited edition Super Starwalker comic strip."
                            ]
                          : [
                               '<32>{#p/basic}{#n1}* Finally, someone speaks to me!',
                               "<32>* I've been standin' out here for ages, and nobody's takin' my offer.",
                               "<32>* I'm just lookin' for someone to buy this limited edition Super Starwalker comic strip."
                            ]),
                       "<32>* Interested?\n* All I'm askin' for is 10G.",
                       choicer.create('{#n1!}* (Buy the Super Starwalker 1 for 10G?)', 'Evet', 'Hayır')
                    ],
            () =>
               SAVE.data.b.napsta_performance
                  ? [
                       "<32>{#p/basic}{#n1}* Interested in buyin' my limited edition Super Starwalker comic strip?",
                       "<32>* All I'm askin' for is 5G.",
                       choicer.create('{#n1!}* (Buy the Super Starwalker 1 for 5G?)', 'Evet', 'Hayır')
                    ]
                  : [
                       "<32>{#p/basic}{#n1}* Interested in buyin' my limited edition Super Starwalker comic strip?",
                       "<32>* All I'm askin' for is 10G.",
                       choicer.create('{#n1!}* (Buy the Super Starwalker 1 for 10G?)', 'Evet', 'Hayır')
                    ]
         ),
         b: () => [
            "<32>{#p/human}{#n1!}* (You don't have enough G.)",
            SAVE.data.b.napsta_performance
               ? "<32>{#p/basic}{#n1}* I'll be honest, that don't look like 5G..."
               : "<32>{#p/basic}{#n1}* I'll be honest, that don't look like 10G..."
         ],
         c: [ '<32>{#p/basic}{#n1}* Not interested, huh?', "<32>* Well, that's fine.\n* I'll just find someone else..." ],
         d: [
            '<32>{#s/equip}{#p/human}{#n1!}* (You got the Super Starwalker 1.)',
            '<32>{#p/basic}{#n1}* Splendid!\n* Enjoy the comic strip.'
         ],
         e: [ '<32>{#p/basic}{#n1}* Back again, huh?', "<32>* Sorry bud, I've got nothin' left to sell." ],
         f: [
            "<32>{#p/human}{#n1!}* (You're carrying too much.)",
            "<32>{#p/basic}{#n1}* Them pockets of yours are lookin' kinda full..."
         ],
         g: [
            "<32>{#p/basic}{#n1}* I heard they're rebooting the comic franchise...",
            '<32>* The new main character is some snake fella with sunglasses or something.',
            "<32>* If I was in charge, I'd make a spinoff about that sidekick...",
            '<32>* Gumbert, I think?'
         ],
         h: [
            "<32>{#p/basic}{#n1}* Maybe now that we're free, they'll finally make that reboot they were planning.",
            "<32>* What was it called?\n* Oh, I've already forgotten..."
         ]
      },
      mananaX: () =>
         [
            [
               '<32>{#p/basic}{#n1}* Now what was THAT racket?',
               "<32>{#p/basic}{#n1}* Er, sorry, my eyesight's not what it used to be..."
            ],
            [ '<32>{#p/basic}{#n1}* Huh?\n* It happened again?\n* Tch, kids these days...' ],
            [ '<32>{#p/basic}{#n1}* Kids these days...' ]
         ][Math.min(roomKills().w_puzzle4++, 2)],
      afrogX: (k: number) =>
         [
            [ "<32>{#p/basic}{#n1}* If... if you d-do that again... I-I'm gonna have to stop you!" ],
            [ '<32>{#p/basic}{#n1}* N-no...\n* Not again...' ]
         ][k],
      patron: {
         a: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? 6 <= world.population
                     ? [
                          "<32>{#p/basic}{#n1}* I'm sad.\n* They took the DJ table to use for some tacky show later.",
                          '<32>* ... wait, that might actually be kind of cool.'
                       ]
                     : [
                          "<32>{#p/basic}{#n1}* I'm sad.\n* The bully who came through here earlier...",
                          '<32>* ... turned out to be you.',
                          '<32>* You saved us in the end, but why resort to such violence along the way?'
                       ]
                  : SAVE.data.b.napsta_performance
                  ? [
                       "<32>{#p/basic}{#n1}* I'm sad.\n* Musicians these days are way too hard on themselves...",
                       '<32>* Personally, I really liked that tune of theirs.',
                       "<32>* It's a shame we'll probably never get to hear it again.",
                       '<32>{#n1!}{#n2}* At least you still have steak to keep you company, right? ;)',
                       '<32>{#n2!}{#n1}* ... not this again.'
                    ]
                  : [
                       "<32>{#p/basic}{#n1}* I'm sad.\n* The food these days just gets worse and worse...",
                       '<32>* I was promised something \"real,\" but all I got was a cheap copy.',
                       '<32>{#n1!}{#n2}* Hey! ;)\n* Quit bad-mouthing my shop in front of the customers! ;)',
                       '<32>* Besides, what if your sense of taste is to blame ;)',
                       '<32>{#n2!}{#n1}* ... typical.'
                    ],
            () => [
               SAVE.data.n.plot === 72 && 6 <= world.population
                  ? "<32>{#p/basic}{#n1}* ... it isn't what it is?"
                  : '<32>{#p/basic}{#n1}* ... it is what it is.'
            ]
         )
      },
      pie: () =>
         3 <= SAVE.data.n.cell_insult
            ? [ '<32>{#p/human}* (You got the Burnt Pie.)' ]
            : SAVE.data.n.state_wastelands_mash === 1
            ? [ '<32>{#p/human}* (You got the Pie Soup.)' ]
            : SAVE.data.b.snail_pie
            ? [ '<32>{#p/human}* (You got the Snail Pie.)' ]
            : [ '<32>{#p/human}* (You got the Butterscotch Pie.)' ],
      plot_call: {
         a: () => [
            '<32>{#p/event}* Zırr, zırr...',
            3 <= SAVE.data.n.cell_insult
               ? '<25>{#p/toriel}* Merhaba, çocuk.'
               : '<25>{#p/toriel}* Merhaba?\n* Bu Toriel.',
            '<25>{#f/1}* Soracağım şeyin hiçbir özel sebebi yok...',
            '<25>{#f/0}* Tarçın mı yoksa karamel mi tercih edersin?',
            choicer.create('* (Hangisini tercih edersin?)', 'Tarçın', 'Karamel'),
            3 <= SAVE.data.n.cell_insult
               ? '<25>{#p/toriel}{#f/0}* Anlıyorum.'
               : '<25>{#p/toriel}* Ah, anlıyorum!\n* Çok teşekkür ederim!'
         ],
         b: () => [
            '<32>{#p/event}* Zırr, zırr...',
            3 <= SAVE.data.n.cell_insult
               ? '<25>{#p/toriel}* Merhaba, çocuk.'
               : '<25>{#p/toriel}* Merhaba?\n* Bu Toriel.',
            [
               '<25>{#f/1}* Karamelden NEFRET etmiyorsun, değil mi?',
               '<25>{#f/1}* Tarçından NEFRET etmiyorsun, değil mi?'
            ][SAVE.data.n.choice_flavor],
            '<25>{#f/1}* Tercihinin ne olduğunu biliyorum, ama...',
            '<25>{#f/1}* Tabağında bulunuyor olsaydı yine de memnun olur muydun?',
            choicer.create('* (Ne diyeceksin?)', 'Evet', 'Hayır')
         ],
         b1: () => [
            3 <= SAVE.data.n.cell_insult
               ? '<25>{#p/toriel}{#f/0}* Anlaşıldı.'
               : '<25>{#p/toriel}* Tabii, tabii, elbette.',
            '<25>{#f/1}* Tamamdır, öyleyse...'
         ],
         b2: () => [
            '<25>{#p/toriel}{#f/5}* ...',
            '<25>{#f/0}* Pekala öyleyse.',
            '<25>{#f/1}* ...',
            3 <= SAVE.data.n.cell_insult
               ? '<25>{#f/0}* Ne yapabileceğime bir bakacağım.'
               : '<25>{#f/0}* Seni sonra arayacağım, çocuğum.'
         ],
         c: [
            '<32>{#p/event}* Zırr, zırr...',
            '<25>{#p/toriel}{#f/1}* Herhangi bir alerjin yok, değil mi?',
            '<25>{#f/5}* ...',
            '<25>{#f/5}* Sanırım insanların canavar yiyeceklerine alerjisi olamaz bile.',
            '<25>{#f/0}* Hee hee.\n* Sorduğumu unut gitsin!'
         ],
         d: [
            '<32>{#p/event}* Zırr, zırr...',
            '<25>{#p/toriel}{#f/1}* Merhaba, ufaklık.',
            '<25>{#f/0}* Şimdi fark ediyorum ki, en son temizlik yapalı epey zaman geçmiş.',
            '<25>{#f/1}* Muhtemelen etrafta saçılmış bir sürü şey vardır...',
            '<25>{#f/0}* İstersen bunları yanına alabilirsin, ama çok fazla şey taşımamaya çalış.',
            '<25>{#f/1}* Ya gerçekten çok istediğin bir şey görecek olursan?',
            '<25>{#f/0}* Bunun için cebinde biraz yer bırakmak isteyeceksindir.'
         ]
      },
      puzzle1A: () =>
         SAVE.data.b.svr
            ? [ '<32>{#p/human}* (The switch appears to be stuck.)' ]
            : [ '<32>{#p/basic}* The switch is stuck.' ],
      puzzle3A: () =>
         SAVE.data.b.svr
            ? [ '<32>{#p/human}* (The switch appears to be stuck.)' ]
            : [ '<32>{#p/basic}* The switch is stuck.' ],
      return1: () => [
         SAVE.data.n.cell_insult < 3
            ? '<25>{#p/toriel}{#f/1}* Çocuğum, sen nasıl geldin buraya!?'
            : '<25>{#p/toriel}{#f/1}* Ah... işte buradasın.',
         '<25>* İyi misin?'
      ],
      return2a: () =>
         SAVE.data.n.cell_insult < 3
            ? [ '<25>{#p/toriel}* Bir çizik bile yok!\n* Etkileyici.' ]
            : [ '<25>{#p/toriel}{#f/10}* Hiçbir çizik yok...\n* İyi öyleyse.' ],
      return2b: () =>
         SAVE.data.n.cell_insult < 3
            ? [ '<25>{#p/toriel}{#f/4}* Yaralanmış görünüyorsun...', '<25>{#f/10}* İşte, işte, seni iyileştireceğim.' ]
            : [ '<25>{#p/toriel}{#f/9}* Yaralanmışsın.', '<25>{#f/10}* Lütfen, yaralarını iyileştirmeme izin ver.' ],
      return2c: [
         '<25>{#p/toriel}{#f/3}* ...',
         '<25>{#f/11}* Bunu sana kim yaptı?\n* Birisi bunun hesabını verecek.'
      ],
      return3: () => [
         '<25>{#p/toriel}* Özür dilerim, ufaklık.\n* Seni yalnız bırakmak benim aptallığımdı.',
         ...(world.postnoot
            ? [
                 '<25>{#f/1}* ... sadece bana mı öyle geliyor, yoksa atmosferde bir sorun mu var?',
                 '<25>{#f/5}* Belki de onu sağlayan sistem düzgün çalışmıyordur.',
                 '<25>{#f/5}* ...',
                 '<25>{#f/0}* Önemli değil.\n* En kısa sürede çözüleceğinden eminim.'
              ]
            : []),
         '<25>{#f/1}* Gel!\n* Sana bir sürprizim var.'
      ],
      return4: () => [
         '<25>{#p/toriel}* Salonuma hoş geldin!',
         ...(3 <= SAVE.data.n.cell_insult
            ? [
                 '<25>{#f/1}* Kokuyu alabiliyor musun...',
                 '<25>{#p/toriel}{#f/2}* ... ah, fırını kontrol etmeyi unuttum!',
                 '<25>{#p/toriel}{#f/5}* Kafam önceki tavrınla o kadar meşguldü ki, ben...',
                 '<25>{#p/toriel}{#f/1}* Bununla hemen ilgilenmem gerekiyor, lütfen uzaklaşma!'
              ]
            : [
                 '<25>{#f/1}* Kokuyu alabiliyor musun?',
                 ...(SAVE.data.b.snail_pie
                    ? [ '<25>{#f/0}* Sürpriz!\n* Bu bir ev yapımı salyangozlu turta.' ]
                    : [
                         '<25>{#f/0}* Sürpriz!\n* Bu bir ev yapımı karamelli-tarçınlı turta.',
                         '<25>{#f/0}* Bu akşam için salyangozlu turta yerine bunu tercih edeceğini düşündüm.'
                      ]),
                 '<25>{#f/1}* Şimdi, en son birisi için ilgilenmem üzerinden uzun zaman geçti...',
                 '<25>{#f/0}* Ama yine de burada yaşarken güzel vakit geçirmeni istiyorum.',
                 '<25>{#f/0}* Beni takip et!\n* Senin için bir sürprizim daha var.'
              ])
      ],
      return5: [
         "<25>{#p/toriel}* Şuna bir bak!\n* Bu senin kendine ait bir odan.",
         '<25>{#f/1}* Umarım beğenirsin...'
      ],
      return6: [
         '<25>{#p/toriel}{#f/1}* Pekala, gidip turtaya bir bakmam lazım.',
         '<25>{#f/0}* Lütfen, kendini evinde gibi hisset!'
      ],
      runaway1: [
         [ '<25>{#p/toriel}{#f/1}* Burası yerine evde oynaman gerekmez mi?', '<25>{#f/0}* Gel öyleyse.' ],
         [ '<25>{#p/toriel}{#f/9}* Çocuğum, burada dışarıda oynamak tehlikelidir.', '<25>{#f/5}* Güven bana.' ],
         [ '<26>{#p/toriel}{#f/5}* Burada yer çekimi düşüktür.\n* Dışarı süzüleceksin.' ],
         [ '<25>{#p/toriel}{#f/5}* Burada atmosfer sistemi zayıftır.\n* Bu gidişle nefessiz kalacaksın.' ],
         [ '<25>{#p/toriel}{#f/23}* Burada görebileceğin hiçbir şey yok.' ],
         [ '<25>{#p/toriel}{#f/1}* Benimle kitap okumak ister misin?' ],
         [ '<25>{#p/toriel}{#f/1}* Outlands\'deki diğer odaları tekrar ziyaret etmek ister misin?' ],
         [ '<25>{#p/toriel}{#f/5}* Kendini tehlikeye atmana izin vermeyeceğim.' ],
         [ '<25>{#p/toriel}{#f/3}* Bunu tüm gün yapmamı mı bekliyorsun?' ],
         [ '<25>{#p/toriel}{#f/4}* ...' ],
         [ '<25>{#p/toriel}{#f/17}* ...', '<25>{#f/15}* Oynadığın oyunu beğenmiyorum.' ],
         [ '<25>{#p/toriel}{#f/17}* ...' ]
      ],
      runaway2: [
         '<25>{#p/toriel}{#f/1}* Lütfen eve geri dön, ufaklık...',
         '<25>{#f/0}* Sana göstereceğim bir şey var!'
      ],
      runaway3: [
         '<25>{#p/toriel}{#f/2}* Çocuk, hayır!\n* Burası senin için güvenli değil!',
         '<25>{#f/0}* Gel. Kahvaltıyı hazırlamayı bitirdim.'
      ],
      runaway4: [ '<25>{#p/toriel}{#f/2}* Çocuk!\n* Ne yapıyorsun!?' ],
      runaway5: [
         '<25>{#p/toriel}{#f/1}* Buradan ayrılırsan neler olacağının farkında mısın?',
         '<25>{#f/5}* Ben... Ben sana daha fazla ilgi göstermediğim için özür dilerim...',
         '<25>{#f/9}* Belki bunu yapmış olsaydım, buradan kaçmazdın...'
      ],
      runaway6: [
         '<25>{#g/torielStraightUp}* İtiraf etmeliyim... Ben buradan ayrılmaktan korkuyorum.',
         '<25>{#f/9}* Buranın ötesinde ikimizi de tehdit edecek birçok tehlike mevcut.',
         '<25>{#g/torielSincere}* Seni onlardan korumak istiyorum, ama...',
         '<25>{#g/torielStraightUp}* Eğer seni takip edersem, yalnızca seni daha fazla tehlikeye atmış olurdum.',
         '<25>{#f/9}* Benim varlığım bir tehdit olarak algılanırdı.'
      ],
      runaway7: [
         '<25>{#p/toriel}{#f/5}* Lütfen...',
         '<25>{#f/1}* Benimle geri dön, sana iyi bakacağıma söz veriyorum.',
         '<25>{#f/5}* Sen ne istersen yapacağım, tamam mı?',
         '<25>{#f/18}* Lütfen... beni diğerleri gibi bırakma...'
      ],
      runaway7a: [
         '<25>{#p/toriel}{#f/18}* ...',
         '<25>{#g/torielCompassionSmile}* İşte, işte, çocuğum.\n* Artık her şey yoluna girecek.',
         '<25>{#f/1}* Eve geri dön, ben de yakında sana katılacağım.',
         '<25>{#f/5}* Burada yapmam gereken bir şey var.'
      ],
      runaway7b: [
         '<25>{#p/toriel}{#f/21}* Ne kadar acınası...',
         '<25>* Ben...\n* Tek bir insan çocuğunu bile koruyamıyorum...',
         '<32>{#p/human}* (Gittikçe uzaklaşan ayak sesleri duyuyorsun.)'
      ],
      silencio: {
         a: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                       '<32>{#p/basic}{#n1}* Selam.\n* Seni tekrar burada görmek güzel.',
                       "<32>* Bu mesken edindiğim yeri tekrar ziyaret etmeye geldim...",
                       "<32>* Ne de olsa, burası sessiz.\n* Aynı benim gibi.",
                       "<32>* Ayrıyeten, ÇEKİRDEK’teki işimi bıraktım.",
                       '<32>* Şöyle ki, mühendislik ekibine katıldığımda...',
                       "<32>* Hazırlıksız nöbet işine çağırılacağımı bilmiyordum.",
                       '<32>* ... anlaşılan kurumsal çeşitliliğin aldatıcı dünyasını ben bile fark edememişim.'
                    ]
                  : SAVE.data.b.napsta_performance
                  ? [
                       '<32>{#p/basic}{#n1}* Selam.\n* Seni gösteride görmek güzeldi.',
                       "<32>* Adım Silencio... ama bunu önceden duyduğuna eminim.",
                       '<32>* Etrafımdaki herkes adımı biliyor, o DJ bile.',
                       '<32>* Bir keresinde burada kendi müzikalimi yapmıştım.',
                       '<32>* \"Silencio\'nun Mükemmel Kaçışı\"ydı adı da.',
                       '<32>* Müzikal bitince, daha kalabalık nefesini toparlayamadan ortadan kaybolmuştum.'
                    ]
                  : [
                       '<32>{#p/basic}{#n1}* Selam.\n* Seninle tanışmak güzel.',
                       "<32>* İsmim Silencio… yani en azından bana öyle diyorlar, neyse.",
                       '<32>* Bana niye öyle hitap ettiklerini bilmek ister misin?',
                       "<32>* Uzay ninjası gibiyimdir, en sessiz yıldızlar kadar da sessiz.",
                       '<32>* Her türlü tehlikeden sıvışabilirim, istisnasız.',
                       "<32>* Bana inanmıyor musun?\n* İlginç bir şey dene, ve ne kadar hızlı kaçtığımı gör."
                    ],
            () =>
               SAVE.data.n.plot === 72
                  ? [
                       "<32>{#p/basic}{#n1}* Ah evet, sanırım artık galaksiyi terk etmekte özgürüm.",
                       "<32>* ... ama belki kalırım."
                    ]
                  : SAVE.data.b.napsta_performance
                  ? [
                       '<32>{#p/basic}{#n1}* Bir bakıma, performansım onlar için…',
                       '<32>* “Nefes kesiciydi\" diyebilirsin.'
                    ]
                  : [
                       '<32>{#p/basic}{#n1}* Neden hala benimle konuşuyorsun, ha?',
                       "<32>* Zaten söylemek istediğim her şeyi söyledim."
                    ]
         )
      },
      
      socks0: [ '<32>{#p/human}* (You peek inside.)', '<32>{#p/human}* (It appears the drawer is empty.)' ],
      socks1: () =>
         world.darker
            ? [ '<32>{#p/human}* (You peek inside.)', "<32>{#p/basic}* It's just a sock drawer." ]
            : [
                 '<32>{#p/human}* (You peek inside.)',
                 '<32>{#p/basic}* Scandalous!',
                 "<32>* It's Toriel's sock collection.\n* A little messy...",
                 world.meanie
                    ? choicer.create('* (Make it messier?)', 'Evet', 'Hayır')
                    : choicer.create('* (Clean up the mess?)', 'Evet', 'Hayır')
              ],
      socks2: () =>
         world.meanie
            ? [ '<33>{#p/human}* (You make a mess of the socks.)' ]
            : [
                 '<32>{#p/human}* (You organize the socks into matching pairs.)',
                 ...(!SAVE.isCanon() || SAVE.data.b.oops
                    ? []
                    : [
                         "<32>{#p/human}* (...)\n* (It appears there's a key hidden in the drawer.)",
                         choicer.create('* (Take the key?)', 'Evet', 'Hayır')
                      ])
              ],
      socks3: () => [
         "<32>{#p/human}* (...)\n* (It appears there's a key hidden in the drawer.)",
         choicer.create('* (Take the key?)', 'Evet', 'Hayır')
      ],
      socks4: [ '<32>{#p/human}* (You decide not to do anything.)' ],
      socks5: () =>
         saver.svr
            ? [ "<32>{#p/human}* (But you got the sense that it'd be a bad idea.)" ]
            : [
                 '<32>{#s/equip}{#p/human}* (The Secret Key was added to your keyring.)',
                 '<32>{#p/basic}* But what could it unlock...?'
              ],
      socks6: [ '<32>{#p/human}* (You decide not to take anything.)' ],
      socks7: () =>
         SAVE.data.b.svr
            ? [
                 '<32>{#p/human}* (You stare into the sock drawer, recalling the long journey that started here.)',
                 "<32>{#p/human}* (You can't help but wonder where you'd be without it.)"
              ]
            : world.darker
            ? [ "<32>{#p/basic}* It's just a sock drawer." ]
            : SAVE.data.n.plot < 72
            ? [ "<32>{#p/basic}* You can't stop looking at the socks." ]
            : SAVE.data.b.oops
            ? [
                 "<32>{#p/basic}* You came all this way just to revisit Toriel's sock drawer...?",
                 '<32>* You have great priorities in life.'
              ]
            : [
                 "<32>{#p/basic}* You came all this way just to revisit Toriel's sock drawer...?",
                 '<32>* ... I guess that makes sense.'
              ],
      steaksale: {
         a: pager.create(
            0,
            () =>
               SAVE.data.b.napsta_performance
                  ? [
                       '<32>{#p/basic}{#n1}* Sup, lassy ;)',
                       "<32>* It was good seeyin' ya at the show, ya know? ;)",
                       '<32>* You did a real bang-up job ;)',
                       "<32>* If one thing's for sure, I think that calls for a special offer ;)",
                       '<32>* For a limited time only, our products will be infused with our \"premium\" ingredients ;)',
                       "<32>* And believe me, lassy, this ain't just the same old stuff as before, aw naw ;)",
                       '<32>* This stuff is GENUINE, yo ;)',
                       "<32>* It's a little more expensive, so I hope ya don't mind ;)",
                       "<32>* Now... why don'tcha check out what's for sale? ;)"
                    ]
                  : [
                       '<32>{#p/basic}{#n1}* Sup, lassy ;)',
                       '<32>* The boss man sent me out here to see what you country peeps are up to, ya know? ;)',
                       "<32>* You could say we're expanding our enterprise ;)",
                       "<32>* What's our enterprise, you ask? ;)",
                       "<32>* Well, it's quite simple really... we sell steak ;)",
                       "<32>* And this ain't the replicated stuff, aw naw ;)",
                       '<32>* This stuff is REAL, yo ;)',
                       '<32>* Anyone who says otherwise is a poser, ya feel me? ;)',
                       "<32>* That being said, why don'tcha check out what's for sale? ;)"
                    ],
            [ "<32>{#p/basic}{#n1}* Why don'tcha check out what's for sale? ;)" ]
         ),
         a1: [ '<32>{#p/basic}{#n1}* Thanks for everything, lassy ;)' ],
         b: () => [
            SAVE.data.b.napsta_performance
               ? world.darker
                  ? '<32>{#p/basic}{#n1!}* \"Sizzli Steak\" for 40G.'
                  : '<32>{#p/basic}{#n1!}* It\'s labelled \"Sizzli Steak\" and costs 40G.\n* Smells like ultra-hyperbole.'
               : world.darker
               ? '<32>{#p/basic}{#n1!}* \"Sizzli Steak\" for 20G.'
               : '<32>{#p/basic}{#n1!}* It\'s labelled \"Sizzli Steak\" and costs 20G.\n* Smells like hyperbole.',
            SAVE.data.b.napsta_performance
               ? choicer.create('* (Buy the Sizzli Steak for 40G?)', 'Evet', 'Hayır')
               : choicer.create('* (Buy the Sizzli Steak for 20G?)', 'Evet', 'Hayır')
         ],
         b1: [ '<32>{#p/human}{#n1!}* (You got the Sizzli Steak.)', '<32>{#p/basic}{#n1}* Slick choice, lassy ;)' ],
         b2: [ '<32>{#p/human}{#n1!}* (You decide not to buy.)' ],
         c: () => [
            SAVE.data.b.napsta_performance
               ? world.darker
                  ? '<32>{#p/basic}{#n1!}* \"Fizzli Soda\" for 10G.'
                  : '<32>{#p/basic}{#n1!}* It\'s labelled \"Fizzli Soda\" and costs 10G.\n* Who would EVER buy this?'
               : world.darker
               ? '<32>{#p/basic}{#n1!}* \"Fizzli Soda\" for 5G.'
               : '<32>{#p/basic}{#n1!}* It\'s labelled \"Fizzli Soda\" and costs 5G.\n* Who would buy this?',
            SAVE.data.b.napsta_performance
               ? choicer.create('* (Buy the Fizzli Soda for 10G?)', 'Evet', 'Hayır')
               : choicer.create('* (Buy the Fizzli Soda for 5G?)', 'Evet', 'Hayır')
         ],
         c1: [ '<32>{#p/human}{#n1!}* (You got the Fizzli Soda.)', "<32>{#p/basic}{#n1}* Careful, it's sweet ;)" ],
         c2: [ '<32>{#p/human}{#n1!}* (You decide not to buy.)' ],
         d: pager.create(
            0,
            () => [
               "<32>{#p/human}{#n1!}* (You don't have enough G.)",
               '<32>{#p/basic}{#n1}* Not enough money, huh? ;)',
               SAVE.data.b.napsta_performance
                  ? '<32>{#p/basic}* That\'s alright, lassy ;)\n* Not everyone can afford the \"premium\" ingredients ;)'
                  : "<32>{#p/basic}* That's alright, lassy ;)\n* Just be sure to come back when you've got some ;)"
            ],
            [ "<32>{#p/human}{#n1!}* (You don't have enough G.)" ]
         ),
         e: pager.create(
            0,
            [
               "<32>{#p/human}{#n1!}* (You're carrying too much.)",
               '<32>{#p/basic}{#n1}* Maybe you should come back later ;)'
            ],
            [ "<32>{#p/human}{#n1!}* (You're carrying too much.)" ]
         ),
         f: [ '<32>{#p/human}{#n1!}* (You got the Sizzli Steak.)' ],
         g: [ '<32>{#p/human}{#n1!}* (You got the Fizzli Soda.)' ],
         h: [ "<32>{#p/human}{#n1!}* (You're carrying too much.)" ],
         i: [
            "<32>{#p/basic}{#n1}* By the way, we're outta stock ;)",
            "<32>* Seems you can't get enough of our stuff ;)",
            '<32>* Say, if- no, when you meet the boss-man... tell him this ;)',
            '<32>{#p/human}{#n1!}* (Aaron whispered something in your ear.)',
            '<32>{#p/basic}{#n1}* Good luck out there, lassy ;)'
         ]
      },
      supervisor: {
         a: [ '<32>{#p/basic}* Sonra...' ],
         b: [
            '<32>{#p/napstablook}* hey millet...',
            '<32>* bu bir süre önce yazdığım küçük bir melodi…',
            "<32>* kendi tarzımla yeni şeyler deniyordum, o yüzden…",
            "<32>* umarım ki sizler için yeterli olur",
            '<32>* ...',
            '<32>* pekala, işte başlıyor…'
         ],
         c1: [ '<32>{*}{#p/basic}* Hımm, bu caz gibi.{^30}{%}' ],
         c2: [
            '<25>{*}{#p/toriel}{#f/7}* Neden Napstablook bundan hiç bahsetmedi??\n* Bu güzelmiş!{^30}{%}',
            "<32>{*}{#p/basic}* Evet, belki de sadece çekingendir.{^30}{%}"
         ],
         c3: [ '<32>{*}{#p/basic}* Ooo, ziller ;){^30}{%}' ],
         c4: [ '<32>{*}{#p/basic}* Düşüş kısmı geliyor!{^30}{%}' ],
         c5: [ '<32>{*}{#p/basic}* Yani, bu... bir şeydi.{^30}{%}' ],
         d: [
            '<32>{#p/napstablook}* aynen, sadece bir şeydi',
            '<32>{#p/napstablook}* neyse...\n* muhtemelen sizin canınızı sıktım...',
            '<32>{#p/napstablook}* üzgünüm...'
         ],
         e: [
            '<25>{|}{#p/toriel}{#f/2}* Hayır, bekle!\n* Bu aslında...',
            "<32>{#p/basic}* Seni duyabileceğini sanmıyorum, Toriel.",
            '<25>{#p/toriel}{#f/9}* ...\n* Hiçbir zaman duymuyor...'
         ]
      },
      terminal: {
         a: () =>
            postSIGMA()
               ? [ "<32>{#p/human}* (You activate the terminal, but there's no incoming message.)" ]
               : SAVE.data.n.plot === 72
               ? !world.runaway
                  ? [
                       '<32>{#p/human}* (You activate the terminal and play the incoming message.)',
                       "<32>{#p/alphys}* We're free, everyone!\n* This isn't a joke, the force field's gone!",
                       "<32>* Seriously, they're shutting down the core in a few days, so it's time to go!",
                       "<32>* You don't want to die here, do you?"
                    ]
                  : [
                       '<32>{#p/human}* (You activate the terminal and play the incoming message.)',
                       "<32>{#p/alphys}* The force field's gone.\n* Calling all citizens for immediate evacuation.",
                       "<32>* ... I know you're all afraid, but it's going to be okay.",
                       "<32>* They can't hurt us if we leave them behind."
                    ]
               : 37.2 <= SAVE.data.n.plot
               ? [
                    '<32>{#p/human}* (You activate the terminal and play the incoming message.)',
                    "<32>{#p/alphys}* The Foundry's fluid network has been repaired, thanks to our... v-very kind workers.",
                    '<32>* ...',
                    "<32>* On an unrelated note, we're... l-looking for new workers."
                 ]
               : [
                    '<32>{#p/human}* (You activate the terminal and play the incoming message.)',
                    "<32>{#p/alphys}* The Foundry's fluid network is f-falling apart again.",
                    '<32>* The workers have promised a short turnaround, but things are looking bleak.',
                    '<32>* Please, i-if anyone out there can help, we need you...'
                 ]
      },
      torieldanger: {
         a: [ '<25>{#p/toriel}{#f/1}* Terminali kontrol etmeyi denedin mi?' ],
         b: [ '<25>{#p/toriel}{#f/1}* Şifre terminali hemen orada, ufaklık.' ]
      },
      latetoriel1: [
         '<25>{#p/toriel}{#npc/a}{#f/2}* ...!',
         '<25>{#f/5}* Burada ne yapıyorsun, ço...',
         '<25>{#f/9}* ... çocuğum...',
         '<25>{#f/5}* Artık sana daha fazla ilgi gösteremem, çocuk.\n* Göstermemeliyim de zaten.',
         '<25>{#f/5}* Bulunman gereken yerler, görmen gereken şeyler var...',
         '<25>{#f/10}* Ben kimim ki seni bunlardan alıkoyayım?',
         '<25>{#f/9}* ...',
         '<25>{#f/5}* Lütfen, bensiz devam et...',
         '<25>{#f/1}* ... Doğru olanı yapabileceğini biliyorum...'
      ],
      latetoriel2: [ '<25>{#p/toriel}{#npc/a}{#f/5}* ... devam et...' ],
      
      lateasriel: () =>
         [
            [ '<25>{#p/asriel1}{#f/13}* Beni yalnız bırak, Frisk...', "<25>{#f/15}* Seninle geri dönemem, tamam mı?" ],
            [
               "<25>{#p/asriel1}{#f/16}* Tekrar onların kalplerini kırmak istemiyorum.",
               "<25>{#f/13}* Beni asla görmesinler daha iyi."
            ],
            [
               '<25>{#p/asriel1}{#f/15}* ... what are you doing?',
               '<25>{#f/15}* Are you trying to keep me company?',
               '<25>{#f/23}* Frisk...',
               '<25>{#f/22}* ...',
               '<25>{#f/13}* Hey.',
               '<25>{#f/13}* Let me ask you a question.',
               '<25>{#f/15}* Frisk...\n* Why did you come here?',
               '<25>{#f/13}* Everyone knows the story, right...?',
               '<25>{#f/23}* \"Spacecraft who fly into the Ebott sector are said to disappear.\"',
               '<25>{#f/22}* ...',
               '<32>{#p/human}* (...)\n* (You tell Asriel the truth.)',
               '<25>{#p/asriel1}{#f/25}* ...',
               '<25>{#f/25}* Frisk... you...',
               '<25>{#f/23}* ...',
               "<25>{#f/23}* You don't have to be alone anymore, okay?",
               "<25>{#f/17}* You've made so many wonderful friends here...",
               "<25>{#f/17}* They'll look out for you, okay?"
            ],
            [
               '<25>{#p/asriel1}{#f/15}* ...',
               '<25>{#f/15}* I know why $(name) flew out here.',
               "<25>{#f/16}* It wasn't for a very happy reason.",
               "<25>{#f/13}* Frisk.\n* I'll be honest with you.",
               '<25>{#f/15}* $(name) wanted nothing to do with humanity.',
               '<25>{#f/16}* Why, they never said.',
               '<25>{#f/15}* But they felt very strongly about that.'
            ],
            [
               "<25>{#p/asriel1}{#f/17}* Frisk, it's okay.\n* You're not like $(name) at all.",
               '<25>{#f/15}* In fact, though you have similar, uh, fashion choices...',
               "<25>{#f/13}* I don't know why I ever acted like you were the same person.",
               '<25>{#f/15}* Maybe...\n* The truth is...',
               "<25>{#f/16}* $(name) just wasn't who I wanted them to be.",
               '<25>{#f/13}* While, Frisk...',
               "<25>{#f/17}* You're the kind of friend I've always wanted to have.",
               '<25>{#f/20}* So maybe I was kind of projecting a little.',
               "<25>{#f/17}* Let's be honest.\n* I did some weird stuff as a star."
            ],
            [
               "<25>{#p/asriel1}{#f/13}* There's one last thing I feel like I should tell you.",
               '<25>{#f/15}* When $(name) and I combined our SOULs together...',
               '<25>{#f/16}* The control over our body was actually split between us.',
               '<25>{#f/15}* They were the one that picked up their own empty body.',
               "<25>{#f/13}* And then, when we made it to the planet's remains...",
               '<25>{#f/13}* They were the one that wanted to...',
               '<25>{#f/16}* ... to use our full power.',
               '<25>{#f/13}* It took everything I had to resist it.',
               '<25>{#f/15}* And then, because of me, we...',
               "<25>{#f/22}* Well, that's why I ended up the way I did.",
               '<25>{#f/23}* ... Frisk.',
               "<25>{#f/17}* This whole time, I've blamed myself for that decision.",
               "<25>{#f/13}* It's why I adopted that horrible view of the world.",
               '<25>{#f/13}* \"Kill or be killed.\"',
               '<25>{#f/17}* But now...\n* After meeting you...',
               "<25>{#f/23}* Frisk, I don't regret that decision anymore.",
               '<25>{#f/22}* I did the right thing.',
               "<25>{#f/13}* If we'd killed those humans...",
               '<25>{#f/15}* We would have had to wage war against all of humanity.',
               '<25>{#f/17}* And in the end, everyone went free, right?',
               '<25>{#f/17}* Even the others who came here made it out alive.',
               '<25>{#f/13}* ...',
               '<25>{#f/15}* But, $(name)...',
               "<25>{#f/16}* ... I can't say for certain what happened to them after we died.",
               '<25>{#f/15}* Nothing was ever found... not even their SOUL.',
               "<25>{#f/15}* So... I can't help but wonder if they're... still out there.",
               '<32>{#p/basic}* ...',
               '<32>{#p/human}* (It sounds like someone is crying...)'
            ],
            [
               '<25>{#p/asriel1}{#f/17}* Frisk, thank you for listening to me.',
               '<25>{#f/17}* You should really go be with your friends now, okay?',
               '<25>{#f/13}* Oh, and, please...',
               '<25>{#f/20}* In the future, if you, uh, see me...',
               "<25>{#f/15}* ... don't think of it as me, okay?",
               '<25>{#f/16}* I just want you to remember me like... this.',
               '<25>{#f/17}* Someone that was your friend for a little while.',
               '<25>{#f/13}* ...',
               '<32>{|}{#p/human}* (You tell Asriel you really- {%}',
               "<25>{#p/asriel1}{#f/23}* Frisk, it's okay.",
               "<25>{#f/22}* You don't have to save everyone to be a good person.",
               '<25>{#f/13}* Besides... even if I could keep this form...',
               "<25>{#f/15}* I don't know if I could move on from what happened in the past.",
               "<25>{#f/17}* ... just promise me you'll take care of yourself, alright?",
               '<25>{#f/13}* ...',
               '<25>{#f/15}* Well, see you.'
            ],
            [ '<25>{#p/asriel1}{#f/13}* Frisk...', "<25>{#f/15}* Don't you have anything better to do?" ],
            []
         ][Math.min(SAVE.data.n.lateasriel++, 8)],
      securefield: [ '<33>{#p/basic}* There is a security field here.\n* It is active.' ],
      trivia: {
         w_security: [ "<32>{#p/basic}* It's a security field." ],
         photoframe: () =>
            SAVE.data.b.svr
               ? [
                    [
                       '<25>{#p/asriel1}{#f/13}* An empty photo frame...',
                       '<25>{#f/16}* Once upon a time, there WERE pictures in these frames.',
                       '<25>{#f/15}* Then, she took them out and never put them back.',
                       "<25>{#f/16}* ... must've hurt too much to look at them."
                    ],
                    [
                       '<25>{#p/asriel1}{#f/13}* Empty photo frames are like missing memories...',
                       '<25>{#p/asriel1}{#f/15}* This place has way too many of them.'
                    ],
                    [ '<25>{#p/asriel1}{#f/22}* Too many of these in this strange place.' ]
                 ][Math.min(asrielinter.photoframe++, 1)]
               : SAVE.data.n.plot === 72 && !world.runaway
               ? [ '<32>{#p/basic}* Still an empty photo frame.' ]
               : [ '<32>{#p/basic}* An empty photo frame.' ],
         w_paintblaster: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (This device seems to be a few decades out of date.)' ]
               : world.darker
               ? [ '<32>{#p/basic}* A useless device of little importance to anyone.' ]
               : [ '<32>{#p/basic}* An old fuel injection device.' ],
         w_candy: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (The sign warns of unexpected appliance malfunctions.)' ]
               : [ '<32>{#p/basic}* \"Please note that appliances may be more malfunction-prone than they seem.\"' ],
         w_djtable: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (You touch the DJ set.)\n* (It makes an oddly satisfying scratching sound.)' ]
               : world.darker
               ? [ "<32>{#p/basic}* It's a DJ set." ]
               : SAVE.data.n.plot === 72
               ? [ '<32>{#p/basic}* A fancy DJ set, which is surprisingly not in use right now.' ]
               : [ '<32>{#p/basic}* A fancy DJ set, equipped with knobs and sliders galore.' ],
         w_froggit: () =>
            SAVE.data.n.plot === 72
               ? [
                    '<32>{#p/basic}* Ribbit, ribbit.\n* (Excuse me, human.)',
                    '<32>* (You seem like you have grown into a thoughtful and conscientious person.)',
                    "<32>* (Whether that was from my advice or not...)\n* (I'm quite proud.)",
                    '<32>* Ribbit.'
                 ]
               : [
                    '<32>{#p/basic}* Ribbit, ribbit.\n* (Excuse me, human...)',
                    '<32>* (I have some advice for you about battling monsters.)',
                    '<32>* (If you {@fill=#ff0}ACT{@fill=#fff} a certain way or {@fill=#3f00ff}FIGHT{@fill=#fff} until you almost defeat them...)',
                    '<32>* (They might not want to battle you anymore.)',
                    '<32>* (If a monster does not want to fight you, please...)',
                    '<32>* (Use some {@fill=#ff0}MERCY{@fill=#fff}, human.)\n* Ribbit.'
                 ],
         w_froggit_view: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (You stare thoughtfully into the cosmos beyond...)' ]
               : world.darker
               ? []
               : SAVE.data.n.plot === 72
               ? [
                    "<32>{#p/basic}* It's ironic how staring at outer space...",
                    '<32>* Tends to be a great way to channel your inner thoughts.'
                 ]
               : [
                    "<32>{#p/basic}* It's a view of outer space.",
                    '<32>* Certainly no shortage of those around here, is there?'
                 ],
         w_kitchenwall: () =>
            SAVE.data.n.plot === 9
               ? [ '<26>{#p/toriel}{#f/1}* Patience, my child!' ]
               : [ '<26>{#p/toriel}{#f/1}* This may take a while...' ],
         w_lobby1: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (The sign speaks of strength of will in times of trouble.)' ]
               : [ '<32>{#p/basic}* \"Even when you stumble, the will to push onward shows through.\"' ],
         w_pacing_view: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (You stare happily into the cosmos beyond...)' ]
               : world.darker
               ? []
               : SAVE.data.n.plot === 72
               ? [
                    "<32>{#p/basic}* After such a long journey, the glass doesn't seem to scare you.",
                    '<32>* Not that it ever did in the first place.'
                 ]
               : [
                    '<32>{#p/basic}* To think the only thing between you and the endless expanse is a sheet of glass...',
                    "<32>* Despite all common sense, this doesn't seem to bother you."
                 ],
         w_pacing1: () =>
            SAVE.data.n.plot === 72
               ? [
                    '<32>{#p/basic}* Ribbit, ribbit.\n* (Someone passed by here not too long ago.)',
                    '<32>* (He told me not to tell you where he was going.)',
                    "<32>* (I wasn't going to, but then, he just seemed so sad...)",
                    "<32>* (He's probably at the platform just past the entrance now.)",
                    '<32>* (Go. Speak to him. Something good will come of it.)\n* Ribbit.',
                    '<32>{#p/basic}* ... Asriel...'
                 ]
               : [
                    '<32>{#p/basic}* Ribbit, ribbit.\n* (Sigh...)',
                    '<32>* (My \"friend\" doesn\'t really like being kind to me.)',
                    '<32>* (If given the option, they choose to hurt me instead.)',
                    "<32>* (That's right.......)\n* (Hurting me............)\n* (................)",
                    "<32>* (At least you're kind to me.)\n* Ribbit."
                 ],
         w_pacing2: () =>
            SAVE.data.n.plot === 72
               ? SAVE.data.b.oops
                  ? [
                       '<32>{#p/basic}* Ribbit, ribbit.\n* (Hello, human...)',
                       '<32>* (Have you heard from my friend?)',
                       '<32>* (They were standing here a few days ago, just to my left...)',
                       '<32>* (But some time after your arrival, they disappeared.)',
                       "<32>* (They did say they'd leave if you hurt anyone...)",
                       SAVE.data.n.exp <= 0
                          ? "<32>* (Which is confusing, since you definitely haven't done that.)\n* Ribbit."
                          : '<32>* (Maybe next time, you could try being a little nicer?)\n* Ribbit.'
                    ]
                  : [
                       '<32>{#p/basic}* Ribbit, ribbit.\n* (Hello, human...)',
                       "<32>* (My friend is the happiest they've ever been.)",
                       "<32>* (They said they'd leave if you hurt anyone, but you haven't.)",
                       "<32>* (In fact, they've decided to stay to my left forever.)",
                       '<32>* (As for that \"friend\" of theirs who always tried to hurt them...)',
                       '<32>* (Oh, he seems to have turned himself into a goat.)\n* Ribbit.'
                    ]
               : [
                    '<32>{#p/basic}* Ribbit, ribbit.\n* (Hello, human...)',
                    '<32>* (Have you ever tried checking your ITEMs?)',
                    "<32>* (If you've picked up anything, that's where you'll find it.)",
                    '<32>* (What do I have in my ITEMs, you ask?)',
                    "<32>* (Oh, you're silly... monsters don't have ITEMs!)\n* Ribbit."
                 ],
         w_pacing3: () =>
            SAVE.data.n.plot === 72
               ? SAVE.data.n.bully < 1
                  ? [
                       '<32>{#p/basic}* Ribbit, ribbit.\n* (Thank you for always showing mercy to us monsters.)',
                       '<32>* (I know I gave you advice on how to beat people up safely...)',
                       "<32>* (But that didn't mean I wanted you to do it.)",
                       '<32>* (You are a kind human indeed.)\n* Ribbit.'
                    ]
                  : SAVE.data.n.bully < 15
                  ? [
                       '<32>{#p/basic}* Ribbit, ribbit.\n* (Thank you for keeping the beatings to a minimum.)',
                       '<32>* (I know I gave you advice on how to beat people up safely...)',
                       "<32>* (But that didn't mean I wanted you to do it.)",
                       "<32>* (You aren't too terrible, at least for a human.)\n* Ribbit."
                    ]
                  : [
                       '<32>{#p/basic}* Ribbit, ribbit.\n* (So you have proven to be a formidable threat.)',
                       "<32>* (Yet, somehow, I'm still not afraid of you...)",
                       '<32>* (Perhaps at the end, you offered mercy when you could have attacked.)',
                       '<32>* (I do appreciate the restraint you have shown.)\n* Ribbit.'
                    ]
               : [
                    "<32>{#p/basic}* Ribbit, ribbit.\n* (If you beat up a monster until it's almost dead...)",
                    '<32>* (Its name will turn blue.)',
                    '<32>* (Weird, right?)\n* (But I heard humans turn blue when they get beat up, too.)',
                    '<32>* (So, I suppose you can relate to that.)',
                    '<32>* (Well, thank you for listening to my head-talk.)\n* Ribbit.'
                 ],
         w_puzzle1_view: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (You stare deeply into the cosmos beyond...)' ]
               : world.darker
               ? []
               : SAVE.data.n.plot === 72
               ? [ '<32>{#p/basic}* In the end, these rooms still feel like nothing more than lookout areas.' ]
               : [
                    '<32>{#p/basic}* Why does it feel like some of these rooms...',
                    '<32>* ... were just made solely to be lookout areas?'
                 ],
         w_puzzle2: () =>
            SAVE.data.b.svr
               ? world.nootflags.has('w_puzzle2') // NO-TRANSLATE

                  ? [
                       '<32>{#p/human}* (The sign describes puzzle- solving as an unnecessary part of space exploration.)',
                       ...[
                          [
                             '<25>{#p/asriel1}{#f/13}* Unlike most signs, this one has a point.',
                             "<25>{#f/15}* And that's not just because I'm the one who wrote it."
                          ],
                          [ "<25>{#p/asriel1}{#f/3}* ... don't tell me you actually enjoyed these puzzles." ],
                          [ "<25>{#p/asriel1}{#f/10}* Frisk, even you're not THAT weird." ]
                       ][Math.min(asrielinter.w_puzzle2++, 2)]
                    ]
                  : [ '<32>{#p/human}* (The sign describes the value of patience in space.)' ]
               : world.nootflags.has('w_puzzle2') // NO-TRANSLATE

               ? [
                    '<32>{#p/basic}* \"The final frontier is a deep dark sea.\"',
                    '<32>* \"Navigating its waters should NEVER require solving badly designed puzzles!\"'
                 ]
               : [
                    '<32>{#p/basic}* \"The final frontier is a deep dark sea.\"',
                    '<32>{#p/basic}* \"Before charging into the {@fill=#ff993d}great unknown{@fill=#fff}, you must wait for its {@fill=#00a2e8}currents to align{@fill=#fff}.\"'
                 ],
         w_puzzle3_view: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (You stare reflectively into the cosmos beyond...)' ]
               : world.darker
               ? []
               : SAVE.data.n.plot === 72
               ? [ '<32>{#p/basic}* It sure... was... a nice view.' ]
               : [ '<32>{#p/basic}* It sure is a nice view.' ],
         w_puzzle4: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (The sign appears to be an advertisement for a now- defunct steak sale.)' ]
               : [
                    '<32>{#p/basic}* \"Be sure to catch a slice of Glyde\'s Signature Steak (TM) in the activities room!\"'
                 ],
         w_ta_box: () =>
            SAVE.data.b.svr
               ? [
                    [
                       '<25>{#p/asriel1}{#f/20}* Yeah... Toriel was never one to keep these in one piece.',
                       '<25>{#f/21}* Even these replicas of my model starships got smashed...'
                    ],
                    [
                       "<25>{#f/13}* It's surprising.\n* She's usually such an organized person.",
                       '<25>{#p/asriel1}{#f/17}* ... she must have been having a bad day.'
                    ],
                    [ '<25>{#p/asriel1}{#f/13}* It happens...' ]
                 ][Math.min(asrielinter.w_ta_box++, 2)]
               : world.darker
               ? [ "<32>{#p/basic}* It's a toy box.\n* The model starships have been smashed to pieces." ]
               : SAVE.data.n.plot === 72
               ? [
                    '<32>{#p/basic}* The little ships in this box were never repaired.',
                    "<32>* If this was at Asgore's house, they'd be in perfect shape."
                 ]
               : [
                    '<32>{#p/basic}* A box of model starships!\n* And... shattered glass?',
                    '<32>* Looks like someone broke their little ships.'
                 ],
         w_ta_cabinet: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (You can't find anything in here besides several of the exact same outfit.)" ]
               : [
                    '<32>{#p/basic}* A cabinet full of blue and yellow striped shirts.',
                    ...(SAVE.data.n.plot === 72 ? [ "<32>* Like that's ever gonna change." ] : [])
                 ],
         w_ta_frame: () =>
            SAVE.data.b.svr
               ? [ [ "<25>{#p/asriel1}{#f/21}* ... it's missing..." ], [ '<25>{#p/asriel1}{#f/21}* ...' ] ][
                    Math.min(asrielinter.w_ta_frame++, 1)
                 ]
               : SAVE.data.n.plot === 72
               ? [ '<32>{#p/basic}* An empty photo frame.', "<32>* There still isn't much else to say." ]
               : [ '<32>{#p/basic}* An empty photo frame.', "<32>* There's not much else to say." ],
         w_ta_paper: () =>
            SAVE.data.b.svr
               ? [
                    "<32>{#p/human}* (The drawing doesn't appear to be anything of importance.)",
                    ...[
                       [
                          "<25>{#p/asriel1}{#f/13}* It's long gone now, but the real drawing I made here...",
                          '<25>{#f/17}* ... was basically the blueprint for my \"god of hyperdeath\" form.',
                          '<25>{#f/17}* Super skybreaker, titanium striker...',
                          '<25>{#f/20}* And, of course, the legendary \"hyper goner.\"'
                       ],
                       [
                          '<25>{#p/asriel1}{#f/17}* Yeah... I guess I had it all planned out.',
                          '<25>{#f/20}* I came up with lots of crazy stuff, all the time...',
                          '<25>{#f/1}* Ooh, you would have ADORED my pan-galactic starship concept.'
                       ],
                       [
                          '<25>{#p/asriel1}{#f/17}* Frisk, I hope...',
                          '<25>{#f/23}* I really hope we can have a moment like that between us.',
                          '<25>{#f/22}* Back with $(name), it was always...',
                          '<25>{#f/15}* ... difficult.'
                       ],
                       [ "<25>{#p/asriel1}{#f/20}* Don't worry.\n* If you can't draw, I'll just teach you." ]
                    ][Math.min(asrielinter.w_ta_paper++, 3)]
                 ]
               : world.darker
               ? [ '<32>{#p/basic}* A forgettable drawing.\n* Nothing like the original.' ]
               : [
                    "<32>{#p/basic}* A children's drawing, depicting a giant monster with rainbow wings.",
                    "<32>* It's just like the one at home..."
                 ],
         w_tf_couch: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (The couch appears to have never been used.)' ]
               : SAVE.data.n.plot === 72
               ? [ "<32>{#p/basic}* No matter how much time passes, it's unlikely anyone will ever sit here." ]
               : world.darker
               ? [ "<32>{#p/basic}* It's a couch.\n* What else were you expecting?" ]
               : [
                    '<32>{#p/basic}* A comfortable-looking couch.',
                    '<32>* The temptation to sink into its luscious cushions is hard to resist...'
                 ],
         w_tf_table: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (You glance at the end table, but it doesn't appear to glance back.)" ]
               : [
                    '<32>{#p/basic}* An unremarkable end table.',
                    "<32>{#p/basic}* Rather unrealistically, it's in near-perfect condition."
                 ],
         w_tf_window: () =>
            SAVE.data.b.svr
               ? SAVE.data.b.c_state_secret1_used && SAVE.data.b.c_state_secret5_used
                  ? [ '<32>{#p/human}* (You stare wishfully into the cosmos beyond...)' ]
                  : [ '<32>{#p/human}* (You stare wistfully into the cosmos beyond...)' ]
               : world.darker
               ? [ "<32>{#p/basic}* It's just another window." ]
               : SAVE.data.n.plot === 72
               ? [ "<32>{#p/basic}* Despite everything, it's a beautiful view of outer space." ]
               : [ "<32>{#p/basic}* It's a beautiful view of outer space." ],
         w_th_door: () =>
            SAVE.data.b.svr
               ? [
                    '<32>{#p/human}* (The sign describes the room within as being incomplete.)',
                    ...[
                       [
                          "<25>{#p/asriel1}{#f/3}* If this house weren't a replica, that would be Dad's room...",
                          '<25>{#f/4}* You can guess why it was never finished.'
                       ],
                       [
                          '<25>{#p/asriel1}{#f/13}* ...',
                          '<25>{#f/15}* That speech affected Mom in a... not good way.',
                          '<25>{#f/4}* As a star, I sometimes... spied on her.',
                          "<25>{#f/3}* And the way she was talking, it's like she never left that moment.",
                          '<25>{#f/13}* Then, you arrived, and everything changed...'
                       ],
                       [
                          '<25>{#p/asriel1}{#f/13}* ...',
                          "<25>{#f/15}* This is too awkward.\n* I'm going to pretend we aren't here."
                       ],
                       [ '<25>{#p/asriel1}{#f/13}* ...' ]
                    ][Math.min(asrielinter.w_th_door++, 3)]
                 ]
               : [ '<32>{#p/basic}* \"Room under renovations.\"' ],
         w_th_mirror: () =>
            SAVE.data.b.svr
               ? [ "<25>{#p/asriel1}{#f/24}* It's us..." ]
               : world.genocide
               ? [ '<32>{#p/basic}* ...' ]
               : world.darker
               ? [ "<32>{#p/basic}* It's you." ]
               : SAVE.data.b.w_state_catnap || SAVE.data.n.plot > 17
               ? [ "<32>{#p/basic}* It's you...", '<32>{#p/basic}* ... and it always will be.' ]
               : [ "<32>{#p/basic}* It's you!" ],
         w_th_plant: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (You thank the plant for the warmth it brings each day.)' ]
               : SAVE.data.n.plot === 72
               ? [ "<32>{#p/basic}* This plant is just happy you're still alive." ]
               : world.darker
               ? [ '<32>{#p/basic}* This plant is not very happy to see you.' ]
               : SAVE.data.b.oops
               ? [ '<32>{#p/basic}* This plant is happy to see you.' ]
               : [ '<32>{#p/basic}* This plant is ecstatic about seeing you!' ],
         w_th_sausage: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (You rustle the corny plant.)' ]
               : [ '<32>{#p/basic}* This plant looks quite corny.' ],
         w_th_table1: () => [
            '<32>{#p/human}* (You look under the table and find a set of crayons.)',
            ...(SAVE.data.b.svr
               ? [
                    [
                       '<25>{#p/asriel1}{#f/24}* I think $(name) might have lost the blue crayon.',
                       '<25>{#f/7}* ... actually, no.\n* I KNOW they lost the blue crayon.',
                       '<25>{#f/6}* It turned up later in a food chest, but nobody thought to check it.',
                       '<25>{#f/16}* They must have been trying to claim the chest as their own.'
                    ],
                    [
                       "<26>{#p/asriel1}{#f/4}* If we ever get a new set of crayons, I'm keeping watch.",
                       '<25>{#f/3}* The moment you even think about losing a crayon...',
                       "<26>{#f/8}* I'll be there to stop that crime train before it even hits the tracks.",
                       '<25>{#f/2}* Just you wait.'
                    ],
                    [ "<25>{#p/asriel1}{#f/31}* I've got my eyes on you, Frisk.", '<25>{#f/8}* And... maybe my ears.' ],
                    [ '<25>{#p/asriel1}{#f/10}* Are you staring at my ears again?\n* You keep doing that.' ]
                 ][Math.min(asrielinter.w_th_table1++, 3)]
               : world.edgy
               ? [ '<32>{#p/basic}* Two crayons are missing from the set.' ]
               : world.darker
               ? [ '<32>{#p/basic}* One crayon is missing from the set.' ]
               : [
                    '<32>{#p/basic}* The ever-evasive blue crayon, missing for a hundred years...',
                    '<32>{#p/basic}* Truly a legend of our time.'
                 ])
         ],
         w_th_table2: () =>
            SAVE.data.b.svr
               ? [
                    '<32>{#p/human}* (You look under the table and find a deck of cards.)',
                    ...[
                       [
                          '<25>{#p/asriel1}{#f/27}* $(name) and I were never really into those kinds of things.',
                          '<25>{#p/asriel1}{#f/15}* Well... I say never.',
                          "<25>{#p/asriel1}{#f/15}* Uh, let's just not talk about it."
                       ],
                       [
                          '<25>{#p/asriel1}{#f/13}* ...',
                          '<25>{#p/asriel1}{#f/13}* The last time we did, a table got flipped over.',
                          '<25>{#p/asriel1}{#f/17}* Just sibling things.\n* You know how it goes with card games.'
                       ],
                       [ '<25>{#p/asriel1}{#f/17}* ...' ]
                    ][Math.min(asrielinter.w_th_table2++, 2)]
                 ]
               : world.darker
               ? [
                    '<32>{#p/human}* (You look under the table and find a deck of cards.)',
                    "<33>{#p/basic}* It's just not worth your time."
                 ]
               : SAVE.data.n.plot === 72
               ? [
                    '<32>{#p/human}* (You look under the table and find a deck of cards.)',
                    "<33>{#p/basic}* Soon enough, we'll never have to think about these again."
                 ]
               : [
                    '<32>{#p/human}* (You look under the table and find a deck of cards.)',
                    "<33>{#p/basic}* They're holographic, of course."
                 ],
         w_tk_counter: () =>
            SAVE.data.b.svr
               ? [
                    '<32>{#p/human}* (You run your hand across the cutting board, noting the various grooves and ridges.)'
                 ]
               : world.darker
               ? [ "<32>{#p/basic}* It's a cutting board." ]
               : [ "<32>{#p/basic}* Toriel's cutting board.\n* It's not as up-to-scratch as it used to be." ],
         w_tk_sink: () =>
            SAVE.data.b.svr
               ? [
                    [
                       '<25>{#p/asriel1}{#f/21}* $(name) always said leaving fur in the drain was super gross.',
                       '<25>{#f/15}* I always thought it was normal, though...'
                    ],
                    [
                       '<25>{#p/asriel1}{#f/13}* Do humans not shed fur?\n* $(name) would never tell me things like this.'
                    ],
                    [ "<25>{#p/asriel1}{#f/17}* I do have reason to believe humans shed.\n* Even if it's not fur." ]
                 ][Math.min(asrielinter.w_tk_sink++, 2)]
               : SAVE.data.n.plot === 72
               ? [ '<32>{#p/basic}* Remnants of the white fur once stuck here still remain to this very day.' ]
               : [ '<32>{#p/basic}* There are clumps of white fur stuck in the drain.' ],
         w_tk_stove: () =>
            SAVE.data.b.svr
               ? [
                    [
                       '<25>{#p/asriel1}{#f/13}* I have to wonder why she thought buying this would be a good idea.',
                       "<25>{#f/10}* Unless she wanted to re-create Asgore's kitchen...?",
                       "<25>{#f/17}* For someone who didn't like him, she had a weird way to show it."
                    ],
                    [
                       '<25>{#p/asriel1}{#f/15}* I really wish Toriel and Asgore stayed together sometimes.',
                       "<25>{#f/16}* ... but I guess it's for the best that they didn't."
                    ],
                    [ "<25>{#p/asriel1}{#f/13}* It just wasn't meant to be, Frisk..." ]
                 ][Math.min(asrielinter.w_tk_stove++, 2)]
               : SAVE.data.n.state_wastelands_toriel === 2
               ? [ "<32>{#p/basic}* It's just a stovetop.\n* No one is going to use it." ]
               : world.darker
               ? [ "<32>{#p/basic}* It's just a stovetop." ]
               : SAVE.data.n.plot === 72
               ? [ '<32>{#p/basic}* The stovetop is very clean.\n* Toriel may not need a new one on the new world.' ]
               : [ '<32>{#p/basic}* The stovetop is very clean.\n* Toriel must use fire magic instead.' ],
         w_tk_trash: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (You can't make out what's in the trash...)" ]
               : SAVE.data.n.plot === 72
               ? [ '<32>{#p/basic}* Rather symbolically, the trash can has been emptied.' ]
               : [ '<32>{#p/basic}* There is a crumpled up recipe for Starling Tea.' ],
         
         w_tl_azzychair: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (You note the fairly large size of the dining chair.)' ]
               : SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
               ? [ '<32>{#p/basic}* A larger dining chair.' ]
               : [ "<32>{#p/basic}* One of Toriel's dining chairs.\n* Fit for a queen." ],
         w_tl_bookshelf: pager.create(
            1,
            () =>
               SAVE.data.b.svr
                  ? [
                       '<32>{#p/human}* (The books on this bookshelf consist of snail facts, family recipes, and gardening tips.)'
                    ]
                  : [
                       "<32>{#p/basic}* It's a bookshelf.",
                       '<32>{#p/human}* (You pick out a book...)',
                       '<32>{#p/basic}* \"Did you know that snails have a chainsaw-like tongue called a radula?\"',
                       '<32>* \"Not many folks know about that one.\"',
                       '<32>* \"Another neat thing about \'em is how their digestive systems flip as they mature.\"',
                       '<32>* \"Oh, and did I mention...\"',
                       '<32>* \"Snails Talk. {^10}Really. {^10}Slowly.\"',
                       '<32>* \"Just kiddin\', snails don\'t talk.\"',
                       '<32>* \"I mean, could you imagine a world with talking snails?\"\n* \"I know I couldn\'t.\"',
                       '<32>{#p/human}* (You put the book back on the shelf.)'
                    ],
            () =>
               SAVE.data.b.svr
                  ? [
                       '<32>{#p/human}* (The books on this bookshelf consist of snail facts, family recipes, and gardening tips.)'
                    ]
                  : [
                       "<32>{#p/basic}* It's a bookshelf.",
                       '<32>{#p/human}* (You pick out a book...)',
                       '<32>{#p/basic}* \"Dreemurr Family Recipes: Snail Pie\"',
                       '<32>* \"Snail Pie is a coveted tradition among members of the Dreemurr family line.\"',
                       '<32>* \"Making it is a simple process, and can be broken down into five steps.\"',
                       '<32>* \"First, prepare the bottom crust by laying it on top of a pie plate.\"',
                       '<32>* \"Next, whisk evaporated milk, eggs, and spices together in a bowl until smooth.\"',
                       '<32>* \"Then, take several well-aged snails, and thoroughly incorporate into the mixture.\"',
                       '<32>* \"After that, pour the contents of the bowl into the bottom crust.\"',
                       '<32>* \"Last, prepare the top crust by cutting sheet into strips and forming a lattice.\"',
                       '<32>* \"Then just bake the pie!\"',
                       '<32>* \"Once the pie is ready, take it out of the oven, let it cool, and serve!\"',
                       '<32>{#p/human}* (You put the book back on the shelf.)'
                    ],
            () =>
               SAVE.data.b.svr
                  ? [
                       '<32>{#p/human}* (The books on this bookshelf consist of snail facts, family recipes, and gardening tips.)'
                    ]
                  : [
                       "<32>{#p/basic}* It's a bookshelf.",
                       '<32>{#p/human}* (You pick out a book...)',
                       '<32>{#p/basic}* \"Howdy, fellow gardeners.\"',
                       '<32>* \"When it comes to Starling flowers, the line between growth and stagnation...\"',
                       '<32>* \"Is access to open space.\"',
                       '<32>* \"That is why they are commonly grown in Aerialis...\"',
                       '<32>* \"It is the most open area of the outpost.\"',
                       '<32>{#p/human}* (You put the book back on the shelf.)'
                    ]
         ),
         
         w_tl_goreychair: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (You note the small size of the dining chair.)' ]
               : SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
               ? [ '<32>{#p/basic}* A smaller dining chair.' ]
               : world.genocide
               ? [ "<32>{#p/basic}* One of Toriel's dining chairs.\n* Fit for a demon." ]
               : world.darker
               ? [ "<32>{#p/basic}* One of Toriel's dining chairs.\n* Fit for a prince." ]
               : SAVE.data.b.oops
               ? [ "<32>{#p/basic}* One of Toriel's dining chairs.\n* Fit for a child.\n* Like you!" ]
               : [ "<32>{#p/basic}* One of Toriel's dining chairs.\n* Fit for... a little angel.\n* Like you!" ],
         w_tl_table: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (The plant appears to be decorative in nature.)' ]
               : world.darker
               ? [ '<32>{#p/basic}* A decorative plant.\n* Nothing more.' ]
               : [ "<32>{#p/basic}* A decorative plant on Toriel's dining table." ],
         w_tl_tools: () =>
            SAVE.data.b.svr
               ? [
                    [
                       '<25>{#p/asriel1}{#f/20}* $(name) used to pretend these things were musical instruments.',
                       '<25>{#f/17}* They\'d pull them out, start \"playing\" them...',
                       '<25>{#f/20}* Once, I joined in, and we did a little fire- poker-instrument duet.',
                       '<26>{#f/13}* We started using our voices to emulate the instruments, and then...',
                       '<25>{#f/17}* Mom and Dad walked in to add backing vocals!'
                    ],
                    [
                       '<25>{#p/asriel1}{#f/13}* Then, as it turns out, someone had been listening in outside.',
                       '<25>{#f/15}* Before we knew it, we had monsters coming to the house in droves...',
                       '<25>{#f/17}* $(name) and I were still in the middle of the room, doing our thing.',
                       '<25>{#f/20}* But now we had an entire orchestra behind us!',
                       '<25>{#f/17}* We must have performed half of the Harmonexus Index that day.',
                       "<25>{#f/17}* ... it's an old book full of songs from our culture."
                    ],
                    [
                       '<25>{#p/asriel1}{#f/13}* All that because we played pretend with some fire pokers...',
                       '<25>{#f/17}* They say you can make an instrument out of anything.',
                       '<25>{#f/13}* ...',
                       "<25>{#f/15}* Wait...\n* I'M an anything..." 
                    ],
                    [ "<25>{#p/asriel1}{#f/20}* Please don't make a musical instrument out of me." ]
                 ][Math.min(asrielinter.w_tl_tools++, 3)]
               : world.darker
               ? [ '<32>{#p/basic}* Fire pokers.' ]
               : SAVE.data.n.plot === 72
               ? [
                    "<32>{#p/basic}* They're just fire pokers...\n* Or are they?",
                    "<32>* Consider that Toriel's fire is only pleasantly warm, and not hot at all.",
                    '<32>* Why would she need these?',
                    '<32>* Thus, by the process of elimination, these must be advanced musical instruments.'
                 ]
               : [
                    '<32>{#p/basic}* A rack of advanced musical instruments.',
                    '<32>* Upon closer inspection, you realize these are in fact fire pokers.',
                    "<32>* It's hard to tell, given that these tools were likely made...",
                    '<32>* Before the outpost itself even existed.'
                 ],
         
         w_tl_torichair: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (You note the exceptional size of the dining chair.)' ]
               : SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
               ? [ '<32>{#p/basic}* A king-sized dining chair.' ]
               : [ "<32>{#p/basic}* One of Toriel's dining chairs.\n* Fit for a king." ],
         w_toriel_toriel: () => [
            "<32>{#p/basic}* It's locked.",
            toriSV()
               ? SAVE.data.n.plot < 17.001
                  ? '<32>{#p/basic}* It sounds like Toriel is crying...'
                  : '<32>{#p/basic}* It sounds like Toriel is asleep...'
               : '<32>{#p/basic}* It sounds like Toriel is writing...'
         ],
         w_tt_bed: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (The bed seems a lot smaller than it might have used to.)' ]
               : SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
               ? [ "<32>{#p/basic}* It's a bed." ]
               : SAVE.data.n.plot < 72 || world.runaway
               ? [
                    "<32>{#p/basic}* It's Toriel's bed.",
                    ...(world.darker ? [] : [ '<32>* Certainly too big for the likes of you.' ])
                 ]
               : [
                    "<32>{#p/basic}* It's Toriel's bed.",
                    "<32>* You've still got some time to go, but you'll grow into it."
                 ],
         w_tt_bookshelf: pager.create(
            1,
            () =>
               SAVE.data.b.svr
                  ? [
                       '<32>{#p/human}* (The books on this bookshelf consist of history, biology, and a foreboding possibility.)'
                    ]
                  : [
                       SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                          ? "<32>{#p/basic}* It's a bookshelf."
                          : "<32>{#p/basic}* It's Toriel's private bookshelf.",
                       '<32>{#p/human}* (You pick out a book...)',
                       '<32>{#p/basic}* \"Our homeworld gone... our people dead... but why?\"',
                       '<32>* \"Surely, the humans must\'ve had a reason for their attacks.\"',
                       '<32>* \"Did our kind truly pose a threat to them?\"',
                       '<32>* \"Was the threat of our potential truly that dire?\"',
                       '<32>* \"Whatever the case may be, we were cornered, and there was nowhere else to go.\"',
                       '<32>* \"Capitulation was our only real means of survival.\"',
                       '<32>{#p/human}* (You put the book back on the shelf.)'
                    ],
            () =>
               SAVE.data.b.svr
                  ? [
                       '<32>{#p/human}* (The books on this bookshelf consist of history, biology, and a foreboding possibility.)'
                    ]
                  : [
                       SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                          ? "<32>{#p/basic}* It's a bookshelf."
                          : "<32>{#p/basic}* It's Toriel's private bookshelf.",
                       '<32>{#p/human}* (You pick out a book...)',
                       '<32>{#p/basic}* \"When a boss monster is born, a magical link forms between the parents and the child.\"',
                       '<32>* \"Through this, their SOUL is created, ageing the parents along with the child.\"',
                       '<32>* \"The SOUL of a fully-grown boss monster is the strongest known to monsterkind...\"',
                       '<32>* \"Able to persist after death, if only for the briefest of periods.\"',
                       '<32>{#p/human}* (You put the book back on the shelf.)'
                    ],
            () =>
               SAVE.data.b.svr
                  ? [
                       '<32>{#p/human}* (The books on this bookshelf consist of history, biology, and a foreboding possibility.)'
                    ]
                  : [
                       SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                          ? "<32>{#p/basic}* It's a bookshelf."
                          : "<32>{#p/basic}* It's Toriel's private bookshelf.",
                       '<32>{#p/human}* (You pick out a book...)',
                       '<32>{#p/basic}* \"We often worry about what would happen if a human attacked us.\"',
                       '<33>* \"But what if one of our own attacked instead...?\"',
                       '<32>* \"Would we as a society be able to handle such a betrayal?\"',
                       '<32>* \"But who would think to do such a thing?\"',
                       '<32>{#p/human}* (You put the book back on the shelf.)'
                    ]
         ),
         w_tt_cactus: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (This cactus seems to remind you of someone you once knew.)' ]
               : SAVE.data.n.plot < 72
               ? world.darker
                  ? [ '<32>{#p/basic}* Finally, a houseplant we can all relate to.' ]
                  : [ '<32>{#p/basic}* Ah, the cactus.\n* Truly the most tsundere of plants.' ]
               : [ "<32>{#p/basic}* It's not like this cactus was waiting for you to come back or anything..." ],
         w_tt_chair: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (This chair appears to be a little small for the person who owns it.)' ]
               : world.darker
               ? [ "<32>{#p/basic}* It's a reading chair." ]
               : SAVE.data.n.plot === 72
               ? [
                    "<32>{#p/basic}* Toriel's dedicated reading chair...",
                    "<32>* ... at least until Asgore decides he'd like it instead.",
                    "<32>* He's always wanted this chair.\n* I'd be surprised if he didn't take it with him."
                 ]
               : [ "<32>{#p/basic}* Toriel's dedicated reading chair.", '<32>* Smells like lazy bones.' ],
         w_tt_diary: pager.create(
            0,
            ...[
               [
                  '<32>{#p/human}* (İşaretlenmiş paragrafa bakıyorsun.)',
                  '<32>{#p/toriel}{#f/21}* \"Soru: İskelet neden bir arkadaş istemiş?\"',
                  '<32>* \"Cevap: Çünkü yalnız KAVALMIŞ...\"',
                  '<32>{#p/basic}* Espriler bundan sonra aynı ölçüde devam ediyor.'
               ],
               [
                  '<32>{#p/human}* (Başka bir paragrafa bakıyorsun.)',
                  '<32>{#p/toriel}{#f/21}* \"Soru: Bir iskelet hamama gittiğinde nasıl yıkanır?\"',
                  '<32>* \"Cevap: KAFAtasıyla...\"',
                  "<32>{#p/basic}* Bunları okumaya devam etmenin bir anlamı yok."
               ],
               [
                  '<32>{#p/human}* (Başka bir paragrafa bakıyorsun.)',
                  '<32>{#p/toriel}{#f/21}* \"Soru: İskelet köpeğe nasıl veda etmiş?\"',
                  '<32>* \"Cevap: HoşÇAKAL...\"',
                  "<32>{#p/basic}* Bunun komik olmakla uzaktan yakından alakası yoktu."
               ],
               [
                  '<32>{#p/human}* (Başka bir paragrafa bakıyorsun.)',
                  "<32>{#p/basic}* Bu kuru esprilerle yetinemiyorsun.",
                  '<32>{#p/toriel}{#f/21}* \"Soru: İskelet çocukluk arkadaşlarıyla buluşunca ne demiş?\"',
                  '<32>* \"Cevap: KEMİK kadro buluştu...\"',
                  '<32>{#p/basic}* Bu şakalar gittikçe eskiyor...'
               ],
               [
                  '<32>{#p/human}* (Başka bir paragrafa bakıyorsun.)',
                  "<32>{#p/basic}* Bu kuru esprilerle hala yetinemiyorsun.",
                  '<32>{#p/toriel}{#f/21}* \"Soru: İskelet birini tehdit etmek için ne demiş?\"',
                  '<32>* \"Cevap: Bıçak KEMİĞE dayandı...\"',
                  "<32>{#p/basic}* Gerçekten mi?\n* Bu bir espri bile değildi!"
               ],
               [
                  '<32>{#p/human}* (Başka bir paragrafa bakıyorsun.)',
                  "<32>{#p/basic}* Burada beyin hücrelerimizi kaybediyoruz...",
                  "<32>{#p/toriel}{#f/21}* \"İskeletin uykusu gelmiş.\"",
                  '<32>* \"Ancak iskelet ona kapıyı açmamış.\"',
                  '<32>{#p/basic}* ...\n* Söyleyecek sözüm yok.'
               ],
               [
                  '<32>{#p/human}* (Son paragrafa bakıyorsun.)',
                  "<32>{#p/basic}* Ha?\n* Buradaki bir şaka değil...",
                  '<32>{#p/toriel}{#f/21}* \"Bugün Outlands\'e bir insan geldi.\"',
                  '<32>* \"Sans\'ın ona göz kulak olacağına güveniyorum ama...\"',
                  '<32>* \"Onu buna zorlamayı tercih etmem.\"',
                  '<32>* \"Ayrıca, tek bir kraliyet nöbetçisi onu gerçekten de karakolun kalanından koruyabilir mi?\"',
                  '<32>* \"Umarım bu tür soruların yakında bir anlamı kalmayacaktır.\"',
                  '<32>{#p/basic}* ...'
               ],
               [ '<32>{#p/human}* (Burada daha fazla yazılı metin yok.)' ]
            ].map(
               lines => () =>
                  SAVE.data.b.svr
                     ? [ '<32>{#p/human}* (The diary seems to consist primarily of over-the-top skeleton puns.)' ]
                     : SAVE.data.n.plot === 72
                     ? [
                          '<32>{#p/human}* (You look to the newly-written page.)',
                          '<32>{#p/toriel}{#f/21}* \"It seems my preconceptions about Asgore were incorrect.\"',
                          '<32>* \"In failing to confront him, I have failed to understand what was truly going on.\"',
                          '<32>* \"I was right in thinking I did not deserve to be a mother.\"',
                          '<32>* \"But perhaps now... I can learn what being a mother truly means.\"',
                          '<32>* \"I will need to think about this on my own.\"'
                       ]
                     : world.darker
                     ? [ "<32>{#p/basic}* It's a diary.\n* You wouldn't find it funny." ]
                     : SAVE.data.n.plot < 14
                     ? lines
                     : [
                          '<32>{#p/human}* (You look to the most recently written paragraph.)',
                          ...(world.edgy
                             ? [ "<32>{#p/basic}* It's been scribbled out with a crayon." ]
                             : toriSV()
                             ? [
                                  '<32>{#p/toriel}{#f/21}* \"It has not been the best of days.\"',
                                  '<32>* \"Yet another human has fallen out of my care...\"',
                                  '<32>* \"The seventh and final human he\'d need to break the force field.\"',
                                  '<32>* \"I should not have allowed this to happen.\"',
                                  '<32>* \"With the stakes so high, a confrontation may be inevitable...\"'
                               ]
                             : [
                                  '<32>{#p/toriel}{#f/21}* \"It has been an interesting day, to say the least.\"',
                                  '<32>* \"A human arrived...\"',
                                  '<32>* \"Then, tried to leave...\"',
                                  '<32>* \"And then, the strangest thing happened.\"',
                                  '<32>* \"A reminder I have been in need of for some time...\"'
                               ])
                       ]
            )
         ),
         w_tt_plant: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (This houseplant strikes you as exceedingly normal.)' ]
               : [ "<32>{#p/basic}* It's a houseplant.", '<32>* What more is there to say?' ],
         w_tt_trash: pager.create(
            0,
            () =>
               SAVE.data.b.svr
                  ? [ "<32>{#p/human}* (You can't make out what's in the trash...)" ]
                  : world.darker
                  ? [ '<32>{#p/basic}* Snails.' ]
                  : SAVE.data.n.plot === 72
                  ? [ '<32>{#p/basic}* The snails are beginning to smell... ghostly.', '<32>* ... what could this mean?' ]
                  : [
                       "<32>{#p/basic}* It's Toriel's private trash can, containing...",
                       '<32>* Snails.',
                       '<32>* Oodles and oodles of snails.'
                    ],
            pager.create(
               1,
               () =>
                  SAVE.data.b.svr
                     ? [ "<32>{#p/human}* (You can't make out what's in the trash...)" ]
                     : world.darker
                     ? [ '<32>{#p/basic}* Snails.' ]
                     : SAVE.data.n.plot === 72
                     ? [ '<32>{#p/basic}* Maybe this is how snails live past their expiry date.' ]
                     : [ '<32>{#p/basic}* And nothing BUT snails.' ],
               () =>
                  SAVE.data.b.svr
                     ? [ "<32>{#p/human}* (You can't make out what's in the trash...)" ]
                     : world.darker
                     ? [ '<32>{#p/basic}* Snails.' ]
                     : SAVE.data.n.plot === 72
                     ? [ "<32>{#p/basic}* Or maybe I've just gone and lost it completely." ]
                     : [ '<32>{#p/basic}* ...\n* Did I mention the snails?' ],
               () =>
                  SAVE.data.b.svr
                     ? [ "<32>{#p/human}* (You can't make out what's in the trash...)" ]
                     : world.darker
                     ? [ '<32>{#p/basic}* Snails.' ]
                     : SAVE.data.n.plot === 72
                     ? [ '<32>{#p/basic}* Or maybe...', '<32>* ... wait, what was I saying?' ]
                     : [ '<32>{#p/basic}* Snails.' ],
               () =>
                  SAVE.data.b.svr
                     ? [ "<32>{#p/human}* (You can't make out what's in the trash...)" ]
                     : world.darker
                     ? [ '<32>{#p/basic}* Snails.' ]
                     : SAVE.data.n.plot === 72
                     ? [ "<32>{#p/basic}* Oh, right.\n* The meaning of the snails' newfound ghostly scent." ]
                     : [ '<32>{#p/basic}* Oodles and oodles of snails.' ]
            )
         ),
         w_tutorial_view: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (You stare excitedly into the cosmos beyond...)' ]
               : world.darker
               ? []
               : [ '<32>{#p/basic}* The first of many windows in this part of the Outlands.' ],
         w_tutorial1: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (The sign describes the qualities of a good relationship.)' ]
               : [
                    '<32>{#p/basic}* \"A good relationship requires trust and kindness to move forward.\"',
                    ...(world.goatbro && SAVE.flag.n.ga_asrielOutlands7++ < 1
                       ? [ '<26>{#p/asriel2}{#f/8}* How grossly sentimental.' ]
                       : [])
                 ]
      },
      piecheck: () =>
         SAVE.data.b.svr
            ? [
                 [
                    "<25>{#p/asriel1}{#f/17}* Mom's pies were always the best...",
                    '<25>{#f/13}* I can still remember what the first one I ever had tasted like.',
                    "<25>{#f/15}* I'd never felt so happy to take a bite of something...",
                    "<25>{#f/17}* ... it was like I'd transcended to the next level of confection."
                 ],
                 [
                    "<25>{#p/asriel1}{#f/20}* Er, maybe I'm overselling it just a little.",
                    "<25>{#f/17}* But I'm telling you right now, Frisk...",
                    '<25>{#f/13}* ... no matter what happens with Mom and Dad...',
                    '<25>{#f/17}* You NEED to have her make one of her pies for me.',
                    "<25>{#f/20}* I'm... kind of curious if I'll still like it after all of this."
                 ],
                 [ '<25>{#p/asriel1}{#f/15}* It sure has been a while, huh...' ]
              ][Math.min(asrielinter.piecheck++, 2)]
            : SAVE.data.n.plot < 8
            ? world.darker
               ? [ "<32>{#p/basic}* It's just a countertop." ]
               : [ '<32>{#p/basic}* There is a nigh-invisible ring-shaped stain on the countertop.' ]
            : SAVE.data.n.state_wastelands_mash === 1 && SAVE.data.n.plot > 8
            ? [ '<32>{#p/basic}* The ghost of a pie once smashed haunts the countertop.' ]
            : SAVE.data.n.plot === 72
            ? SAVE.data.n.state_wastelands_mash > 0
               ? [ '<32>{#p/basic}* No amount of passed time will fix this atrocity.' ]
               : SAVE.data.n.state_wastelands_toriel === 2
               ? [ '<32>{#p/basic}* You feel strongly that you should leave this alone.' ]
               : world.runaway
               ? [
                    '<32>{#p/basic}* You might have been a bully, but the pie remains untouched.',
                    '<32>{#p/basic}* Perhaps some things are too sacred, even for you.'
                 ]
               : [
                    world.meanie
                       ? '<32>{#p/basic}* The pie may be intimidated by you, but after all this time...'
                       : '<32>{#p/basic}* The size of the pie may no longer intimidate you, but after all this time...',
                    "<32>{#p/basic}* You've gained a sense of respect for the pie that does not permit you to eat it."
                 ]
            : SAVE.data.n.state_wastelands_mash > 0
            ? [ '<32>{#p/basic}* There is simply nothing more to be done here.' ]
            : SAVE.data.n.state_wastelands_toriel === 2
            ? [ '<32>{#p/basic}* You feel strongly that you should leave this alone.' ]
            : world.meanie
            ? [
                 '<32>{#p/basic}* The size of the pie does not intimidate you at all.',
                 '<32>{#p/basic}* In fact, it might even be intimidated by you...',
                 choicer.create('* (Smash the pie?)', 'Evet', 'Hayır')
              ]
            : [ '<32>{#p/basic}* The size of the pie intimidates you too much to eat it.' ],
      piesmash1: [ '<32>{#p/human}* (You decide not to smash.)' ],
      piesmash2: [ '<32>{#p/human}* (You take a swing...)' ],
      piesmash3: [ "<32>{#p/basic}* It's been utterly destroyed." ],
      tutorial_puzzle1: [
         '<25>{#p/toriel}* Unlike the puzzle beforehand, this one is a little different.',
         '<25>{#f/1}* It IS rare, but certain puzzles on the outpost...'
      ],
      tutorial_puzzle2: [
         '<25>{#p/toriel}* ... require the assistance of another monster.',
         '<25>{#f/1}* Do you understand what you must do next?'
      ],
      tutorial_puzzle2a: [ '<25>{#p/toriel}{#f/1}* Do you understand what you must do next?' ],
      tutorial_puzzle3: [ '<25>{#p/toriel}* Very good, little one!\n* Very good.' ],
      tutorial_puzzle4: [ '<25>{#p/toriel}{#f/1}* Your turn...' ],
      tutorial_puzzle4a: [ '<25>{#p/toriel}{#f/0}* It is your turn.' ],
      tutorial_puzzle5: [ '<25>{#p/toriel}* Well done!\n* Only one row to go.' ],
      tutorial_puzzle6: [ '<25>{#p/toriel}{#f/1}* Yes, yes!\n* I am proud of you, my child...' ],
      tutorial_puzzle7: [ '<25>{#p/toriel}* Come with me when you are ready to begin your next lesson.' ],
      tutorial_puzzle8a: [ '<25>{#p/toriel}* The answer does not lie with me, little one.' ],
      tutorial_puzzle8b: [ '<25>{#p/toriel}* Try repeating what you have done before.' ],
      tutorial_puzzle8c: [ '<25>{#p/toriel}{#f/1}* Go on...' ],
      twinkly1: [
         "<25>{#p/twinkly}{#f/5}* Selam!\n* Ben {@fill=#ff0}TWİNKLY{@fill=#fff}.\n* {@fill=#ff0}YILDIZ TWİNKLY{@fill=#fff}!"
      ],
      twinkly2: [
         '<25>{#f/5}* Seni bu karakola hangi rüzgar attı, değerli ziyaretçi?',
         '<25>{#f/5}* ...',
         "<25>{#f/8}* Kayboldun değil mi...",
         "<25>{#f/5}* O zaman, iyi ki senin için ben buradayım!",
         "<25>{#f/8}* Bir süredir zirve formumda değilim ama...",
         '<25>{#f/5}* ...birilerinin sana işin raconunu göstermesi gerek!',
         '<25>{#f/10}* Sanırım bunu biricik ben yapacağım.',
         "<25>{#f/5}* Başlayalım, ha?"
      ],
      twinkly3: [
         "<25>{#f/7}* Ama sen ZATEN bunları biliyordun, di mi?",
         '<25>{#f/8}* ...',
         "<25>{#f/5}* Yine de sana işlerin nasıl yürüdüğünü göstermek bana düşüyor.",
         "<25>* Başlayalım, ha?"
      ],
      twinkly4: [
         "<25>{#p/twinkly}{#f/6}* Tamam, bu kadarı yeter.",
         '<25>{#f/8}* Eğer daha sıfırlamaya devam edeceksen, her türlü...',
         '<25>{#f/6}* İstediğin gibi yap.',
         "<25>{#f/7}* Sadece beni kolayca atlatabileceğini sanma yeter."
      ],
      twinkly5: [ "<25>{#p/twinkly}{#f/6}* Yapacak daha iyi bir şeyin yok mu senin?" ],
      twinkly6: [
         "<25>{#p/twinkly}{#f/6}* İlk darbeni aldığın gibi sıfırladın demek ha?",
         '<25>{#f/7}* Ne kadar acınası.'
      ],
      twinkly6a: [
         "<25>{#p/twinkly}{#f/11}* Güya ben de senin yaptığın şeyi unutacaktım...",
         '<25>{#f/7}* Pis kaytarıkçı seni.'
      ],
      twinkly7: [ '<25>{#p/twinkly}{#f/7}* Bu oyunu bütün gün oynayabilirim, salak.' ],
      twinkly8: [ "<25>{#f/11}* Her neyse, zaten bundan sonra ne geleceğini biliyorsun...{%15}" ],
      twinkly9: [
         '<25>{#p/twinkly}{#f/6}* Selam.',
         "<25>* Eğer burada çok takılırsam alev topunu yiyeceğim gibi duruyor.",
         '<25>{#f/8}* Yazık oldu, cidden...',
         '<25>{#f/7}* Seninle ÖYLE bir eğlenecektim ki.',
         '<25>{#f/6}* ...',
         '<25>{#f/5}* Pekala, görüşürüz!'
      ],
      twinkly9a: [
         '<25>{#p/twinkly}{#f/12}{#v/0}* Sen NE yapıyorsun, $(name)?',
         '<25>{#f/12}{#v/0}* Bütün karakol bizim insafımıza kalmıştı!'
      ],
      twinkly9a1: [ '<25>{#f/6}{#v/0}* Tek yapmamız gereken plana uymaktı.' ],
      twinkly9a2: [
         '<25>{#f/6}{#v/0}* Tek yapmamız gereken Dökümhane\'yi geçip...',
         '<25>* Muhafızları temizleyip...',
         '<25>* Hisar\'a ulaşmaktı!'
      ],
      twinkly9a3: [
         '<25>{#f/6}{#v/0}* Tek yapmamız gereken muhafızları temizleyip...',
         '<25>* Hisar\'dan geçmekti!'
      ],
      twinkly9a4: [
         '<25>{#f/6}{#v/0}* Tek yapmamız gereken o aptal robotu ÖLDÜRMEKTİ...',
         '<25>* Hisar\'dan geçmekti!'
      ],
      twinkly9a5: [ '<25>{#f/6}{#v/0}* Tek yapmamız gereken Hisar\'dan geçmekti!' ],
      twinkly9a6: [ '<25>{#f/6}{#v/0}* Tek yapmamız gereken o budala çöp poşetini ÖLDÜRMEKTİ!' ],
      twinkly9a7: [ '<25>{#f/6}{#v/0}* Tek yapmamız gereken en sona yürümekti!', '<25>* Ramak kalmıştı!' ],
      twinkly9a8: [ '<25>{#f/8}{#v/0}* Korkak...' ],
      twinkly9b: [
         '<25>{#p/twinkly}{#f/5}* $(name)...?',
         "<25>{#f/6}* Az önce ne oldu bilmiyorum.",
         '<25>{#f/8}* Biz mekiğin içindeydik, derken...',
         '<25>{#f/8}* ...',
         '<25>{#f/6}* Benim...',
         '<25>{#f/8}* Benim gitmem gerek...'
      ],
      twinkly9c: [
         "<25>{#p/twinkly}{#f/7}* Demek en başa döndük, ha?",
         "<26>{#f/5}* Ben de seni bekliyordum.\n* Bakalım bu sefer nasıl yapacaksın.",
         "<25>{#f/11}* Kim bilir?\n* Belki artık senin için daha kolay olacaktır.",
         '<25>{#f/7}* Senin güçlerine sahipken benim için öyleydi.',
         '<25>{#f/6}* ...',
         '<25>{#f/5}* Pekala, bol şans!'
      ],
      twinkly10: [
         "<20>{#f/5}Şu kalbi görüyor musun? O senin RUHun, var oluşunun simgesi!",
         '<20>{#f/5}RUH\'un senin önemli bir parçan, ve kendisini devam ettirmesi için SEVGİ lazım.'
      ],
      twinkly11: [
         "<20>{*}{#x2}{#f/5}Buralarda, SEVGİ'nin paylaşımı... {#f/8}küçük beyaz {#f/11}'mutluluk parçalarıyla' olur.",
         "<20>{*}{#f/5}Doğru yoldan başlamanı sağlamak için, seninle biraz kendi SEVGİ'mi paylaşayım.",
         '<20>{*}{#f/5}Toplayabildiğin kadarını toplamaya çalış!{^20}{*}{#x1}{%}'
      ],
      twinkly12: [
         "<20>{*}{#f/8}Tüh, sanırım onları kaçırdın...",
         "<20>{*}{#f/5}Ama sorun yok!",
         '<20>{*}{#x2}{#f/10}Al, biraz daha vereyim.{^20}{*}{#x1}{%}'
      ],
      twinkly13: [
         '<20>{*}{#f/12}Ne oluyo-... ya sen gerizekalı mısın??',
         '<20>{*}{#x2}KOŞ. İÇİNE. ŞU. MERMİLERİN!!!{^20}{*}{#x1}{^999}'
      ],
      twinkly14: 'KOŞ. İÇİNE. ŞU. mutluluk parçalarının~',
      twinkly15: [
         '<20>{#v/1}Hee hee hee...',
         "<20>Bu dünyada, ya ÖLÜRSÜN ya da ÖLDÜRÜRSÜN.",
         '<20>Düşünsene, senin gibi bir RUH bir anda burnumun dibinde kaza yapıyor...',
         "<20>Böyle altın bir fırsatı es geçeceğimi mi sandın?"
      ],
      twinkly16: [
         "<20>{#f/7}Yok, burada neler olduğunu biliyorsun, di mi?",
         "<20>Sen sadece biricik Twinkly'e eziyet etmek istedin, di mi?",
         "<20>Tanrım... kiminle uğraştığını hiç bilmiyor olmalısın.",
         '<20>{#f/11}Hee hee hee...'
      ],
      twinkly17: [ "<20>{#v/1}Sadece çabucak sadede gelmemiz gerekecek, değil mi?", '<20>Hee hee hee...' ],
      twinkly18: [ '<20>{*}{#f/2}{#v/1}{@random=1.1/1.1}GEBER.{^20}{%}' ],
      twinkly19: [ '<20>{#p/toriel}Ne kadar da zalim bir yaratık, bu zavallı masum küçüğe işkence ediyor...' ],
      twinkly20: [
         '<20>Korkmana gerek yok, ufaklık.',
         '<20>Ben {@fill=#003cff}TORİEL{@fill=#000}, {@fill=#f00}OUTLANDS\'in{@fill=#000} gözetmeniyim.',
         '<20>Her gün burada kaza yapmış biri var mı diye kontrol ederim.',
         '<20>Beni takip et, çocuk.\nSana öğretmek istediğim çok fazla şey var.'
      ],
      twinkly21: [
         '<25>{#p/toriel}{#f/1}* Amanın!\n* Sen de nereden geldin, ufaklık?',
         '<25>{#f/1}* Yaralandın mı?',
         '<25>{#f/0}* ...\n* Sana çok fazla soru sorduğum için üzgünüm.',
         '<25>{#f/0}* Ben {@fill=#003cff}TORİEL{@fill=#fff}, {@fill=#f00}OUTLANDS\'in{@fill=#fff} idarecisiyim.',
         '<26>{#f/0}* Her gün buraya uğrayıp kaza yapmış biri\n  var mı diye kontrol ederim.',
         '<25>{#f/0}* Beni takip et, çocuk.\n* Sana öğretmek istediğim çok fazla şey var.'
      ],
      twinkly22: [ '<25>{#f/0}* Bu taraftan.' ],
      w_coffin0: () => [
         '<32>{#p/human}* (Burayı haline bırakmanın en iyi şey olacağını hissediyorsun.)',
         ...(SAVE.data.b.svr ? [ '<25>{#p/asriel1}{#f/13}* ...' ] : [])
      ],
      w_coffin1: () => [
         '<32>{#p/basic}* Bu tabut çok eski.\n* Onunla ilgili kayda değer hiçbir şey yok.',
         ...(world.goatbro && SAVE.flag.n.ga_asrielCoffin++ < 1
            ? [
                 '<25>{#p/asriel2}{#f/13}* Ah, şuna bak.\n* Bunu tam da senlik yapmışlar, $(name).',
                 '<25>{#p/asriel2}{#f/5}* Ne dokunaklı ama.'
              ]
            : [])
      ],
      w_coffin2: pager.create(
         0,
         () => [
            '<32>{#p/basic}* Bu tabut Aralık 251X tarihine dayanıyor.',
            '<32>* Yanına saklanmış eski bir kayıt tutucu bildirge var...',
            choicer.create('* (Bildirgeye eriş?)', 'Evet', 'Hayır')
         ],
         () => [
            '<32>{#p/human}* (Bildirgeyi tekrar alıyorsun.)',
            choicer.create('* (Bildirgeye eriş?)', 'Evet', 'Hayır')
         ]
      ),
      w_coffin3: () => [ choicer.create('* (Sonraki sayfayı oku?)', 'Evet', 'Hayır') ],
      w_coffin4: [ '<32>{#p/human}* (Ama okunacak başka sayfa kalmamıştı.)' ],
      w_coffin5: [ '<32>{#p/human}* (Bildirgeyi ait olduğu yere yerleştirdin.)' ],
      w_dummy1: () =>
         SAVE.data.b.svr
            ? [ '<32>{#p/human}* (Ellerini mankenin üstüne koyuyorsun.)\n* (Çok yıpranmış gibi duruyor.)' ]
            : [ '<32>{#p/basic}* Bir eğitim mankeni, 251X civarlarında üretilmiş.\n* Standart HİSAR üretimi.' ],
      wonder1: [
         '<32>{#p/basic}* Şunu duyuyor musun?\n* Yıldızların sesini?',
         "<32>* Karakolun bazı yerlerinde, mesela burası... bu sesi duyabilirsin.",
         '<32>* Sadece dinlemen yeterli.',
         '<32>* Çok havalı, ha?'
      ]
   },

   b_group_outlands: {
      froggitWhimsun: [ '<32>{#p/story}* Uzay kurbağaları ve Yıldızsinekleri!\n* Ya da o tarz bir şey.' ],
      froggitWhimsun2a: [ '<32>{#p/story}* Uzay kurbağaları...?' ],
      froggitWhimsun2b: [ '<32>{#p/story}* Yıldızsinekleri...?' ],
      looxMigospWhimsun: [ "<32>{#p/story}* Bu üçlü çok güçlü!" ],
      looxMigospWhimsun2: [ '<32>{#p/story}* Üçlü oldu ikili.' ],
      looxMigospWhimsun3: [ '<32>{#p/story}* Biri kaldı.' ],
      moldsmalMigosp: [ '<32>{#p/story}* Silente ve arkadaşları kendilerini tanıtıyor!' ]
   },

   b_opponent_froggit: {
      act_check: [ '<32>{#p/story}* FROGGIT - SAL 4 SAV 5\n* Hayat bu canavar için zor.' ],
      act_check2: [ '<32>{#p/story}* FROGGIT - SAL 4 SAV 5\n* Hayat bu canavar için iyiye gidiyor.' ],
      act_check3: [ "<32>{#p/story}* FROGGIT - SAL 4 SAV 5\n* Hayat bu canavarın yüzüne hiç gülmüyor gibi." ],
      act_check4: [ '<32>{#p/story}* FROGGIT - SAL 4 SAV 5\n* Hayat bu canavar için çok kafa karıştırıcı.' ],
      act_check5: [ '<32>{#p/story}* FROGGIT - SAL 4 SAV 5\n* Hayat bu canavar için sevgi dolu.' ],
      act_threat: [
         '<32>{#p/human}* (Froggit\'i tehdit ettin.)',
         "<32>{#p/basic}* Froggit ne dediğini anlamadı..."
      ],
      act_threat2: [
         '<32>{#p/human}* (Froggit\'i yine tehdit ettin.)',
         "<32>{#p/basic}* Froggit önceki tehdidini hatırladı ve kaçması gerektiğine karar verdi."
      ],
      act_compliment: [
         '<32>{#p/human}* (Froggit\'e iltifat ettin.)',
         "<32>{#p/basic}* Froggit ne dediğini anlamadı..."
      ],
      act_flirt: [
         '<32>{#p/human}* (Froggit\'le flört ettin.)',
         "<32>{#p/basic}* Froggit ne dediğini anlamadı..."
      ],
      act_translate0: [ "<32>{#p/human}* (Ama daha tercüme edecek bir şey söylemedin.)" ],
      act_translate1: [
         '<32>{#p/human}* (Söylediklerini tercüme ettin.)\n* (Froggit artık seni anlayabiliyor.)',
         '<32>{#p/basic}* Froggit pohpohlandı.'
      ],
      act_translate1x: [
         '<32>{#p/human}* (Söylediklerini tercüme ettin.)\n* (Froggit artık seni anlayabiliyor.)',
         '<32>{#p/basic}* Froggit bu savaşa devam etme konusunda tereddütlü.'
      ],
      act_translate1y: [
         '<32>{#p/human}* (Söylediklerini tercüme ettin.)\n* (Froggit artık seni anlayabiliyor.)',
         '<32>* İçten içe tehdit edilmiş halde Froggit kaçıyor!'
      ],
      act_translate1z: [
         '<32>{#p/human}* (Söylediklerini tercüme ettin.)\n* (Froggit artık seni anlayabiliyor.)',
         '<32>{#p/basic}* Froggit korku belirtisi göstermiyor.'
      ],
      act_translate2: [
         '<32>{#p/human}* (Söylediklerini tercüme ettin.)\n* (Froggit artık seni anlayabiliyor.)',
         '<32>{#p/basic}* Froggit\'in yanakları kızardı, en azından içinde öyle.'
      ],
      confuseText: [ '<08>{#p/basic}{~}Vırak, Vırak?' ],
      flirtText: [ '<08>{#p/basic}{~}(Yanakları cidden kızarır.)\nVırak..' ],
      idleText1: [ '<08>{#p/basic}{~}Vırak, vırak.' ],
      idleText2: [ '<08>{#p/basic}{~}Gak, Gak.' ],
      idleText3: [ '<08>{#p/basic}{~}Zıp, zıp.' ],
      idleText4: [ '<08>{#p/basic}{~}Miyav.' ],
      mercyStatus: [ '<32>{#p/story}* Froggit seninle savaşmaya çekiniyor.' ],
      name: '* Froggit',
      meanText: [ '<08>{#p/basic}{~}(Titre, sallan.)\nVırak..' ],
      niceText: [ '<08>{#p/basic}{~}(Yanakları hafiften kızarır.)\nVırak..' ],
      perilStatus: [ '<32>{#p/story}* Froggit kaçacak yer arıyor.' ],
      status1: [ '<32>{#p/story}* Froggit yakınına zıpladı!' ],
      status2: [ '<32>{#p/story}* Savaş alanı egzotik çiçek kokusuyla doldu.' ],
      status3: [ "<32>{#p/story}* Froggit neden burada olduğunu bilmiyor gibi." ],
      status4: [ '<32>{#p/story}* Froggit ileri geri zıplıyor.' ]
   },
   b_opponent_whimsun: {
      act_check: [ '<32>{#p/story}* FLUTTERLYTE - SAL 5 SAV 0\n* Bu canavar uçmayı daha şimdi öğrendi...' ],
      act_check2: [ '<32>{#p/story}* FLUTTERLYTE - SAL 5 SAV 0\n* Bu canavar hep yerde kalmış olmayı diliyor.' ],
      act_console: [
         '<32>{#p/human}* (Flutterlyte\'a daha yükseğe uçmasında yardım ettin.)',
         '<32>{#p/basic}* Flutterlyte sana teşekkür edip uçarak gidiyor...'
      ],
      act_flirt: [
         '<32>{#p/human}* (Flutterlyte ile flört ettin.)',
         '<32>{#p/basic}* İltifatına dayanamayarak, Flutterlyte gözyaşlarına boğulup uçarak uzaklaşıyor...'
      ],
      act_terrorize: [
         '<32>{#p/human}* (Ağlıyorsun, zırlıyorsun ve dişlerini gıcırdatıyorsun.)',
         '<32>{#p/basic}* Flutterlyte panikleyip uçarak ayrılıyor...'
      ],
      idleTalk1: [ '<08>{#p/basic}{~}Bu niye bu kadar zor..' ],
      idleTalk2: [ '<08>{#p/basic}{~}Lütfen bana yardım et..' ],
      idleTalk3: [ "<08>{#p/basic}{~}Korkuyorum.." ],
      idleTalk4: [ "<08>{#p/basic}{~}Bunu yapamam.." ],
      idleTalk5: [ '<08>{#p/basic}{~}\x00*burun çeker*' ],
      name: '* Flutterlyte',
      perilStatus: [ '<32>{#p/story}* Flutterlyte kendisini zar zor havada tutuyor.' ],
      status1: [ '<32>{#p/story}* Flutterlyte önüne geldi!' ],
      status2: [ '<32>{#p/story}* Flutterlyte özür mırıldanmaya devam ediyor.' ],
      status3: [ '<32>{#p/story}* Flutterlyte uysalca süzülüyor.' ],
      status4: [ '<32>{#p/story}* Taze şeftali kokusu havaya siniyor.' ],
      status5: [ '<32>{#p/story}* Flutterlyte soluk soluğa durumda.' ],
      status6: [ '<32>{#p/story}* Flutterlyte göz temasından kaçınıyor.' ]
   },
   b_opponent_loox: {
      act_check: [ '<32>{#p/story}* OCULOUX - SAL 6 SAV 6\n* Bakışma yarışmalarının ustası.\n* Aile adı: Eyewalker' ],
      act_check2: [
         "<32>{#p/story}* OCULOUX - SAL 6 SAV 6\n* Bu zorba pohpohlanmış gibi gözükmemek için elinden geleni yapıyor."
      ],
      act_check3: [ '<32>{#p/story}* OCULOUX - SAL 6 SAV 6\n* Bu canavar senin görüş açında bulunmaktan onur duyuyor.' ],
      act_dontpick: [
         '<32>{#p/human}* (Oculoux’a dik dik baktın.)\n* (Oculoux daha da dik bakıyor.)',
         "<32>{#p/human}* (Oculoux'un gözü gittikçe kasılıyor, ve nihayetinde...)",
         '<32>{#p/human}* (... Oculoux diz çöküyor.)'
      ],
      act_flirt: [ '<32>{#p/human}* (Oculoux ile flört ettin.)' ],
      act_pick: [ '<32>{#p/human}* (Oculoux’a başkalarına bakmayla ilgili kaba bir demeç verdin.)' ],
      checkTalk1: [ '<08>{#p/basic}{~}Bakmaya cesaretin var mı?' ],
      dontDeny1: [ '<08>{#p/basic}{~}Bakın kim fikrini değiştirdi.' ],
      dontTalk1: [ '<99>{#p/basic}{~}Bunun da\nbakışları\ngüçlüymüş.' ],
      flirtDeny1: [ '<08>{#p/basic}{~}Ne kadar tsundere bir davranış.' ],
      flirtTalk1: [ '<08>{#p/basic}{~}Ne? Y-yok canım!' ],
      hurtStatus: [ '<32>{#p/story}* Oculoux’un gözü sulandı.' ],
      idleTalk1: [ "<08>{#p/basic}{~}Gözüm üstünde." ],
      idleTalk2: [ "<08>{#p/basic}{~}Bana ne yapacağımı söyleme." ],
      idleTalk3: [ '<08>{#p/basic}{~}Görmek mutluluktur.' ],
      idleTalk4: [ '<08>{#p/basic}{~}Gözümü yoruyorsun.' ],
      idleTalk5: [ '<08>{#p/basic}{~}Bakışma yarışmasına var mısın?' ],
      name: '* Oculoux',
      pickTalk1: [ '<08>{#p/basic}{~}Ne cüretle yaşam tarzımızı sorgularsın!' ],
      spareStatus: [ "<32>{#p/story}* Savaşmak artık Oculoux'un umurunda değil." ],
      status1: [ '<32>{#p/story}* Bir çift Oculoux üstüne yürüdü!' ],
      status2: [ '<32>{#p/story}* Oculoux sana gözünü dikmiş durumda.' ],
      status3: [ '<32>{#p/story}* Oculoux dişlerini sıkıyor.' ],
      status4: [ '<32>{#p/story}* Göz damlası gibi kokuyor.' ],
      status5: [ '<32>{#p/story}* Oculoux\'un gözü kanlandı.' ],
      status6: [ '<32>{#p/story}* Oculoux sana dik dik bakıyor.' ],
      status7: [ '<32>{#p/story}* Oculoux artık yalnız.' ]
   },
   b_opponent_migosp: {
      act_check: [ "<32>{#p/story}* SILENTE - SAL 7 SAV 5\n* Kötü görünebilir, ama sadece yanlış kişilerle birlikte..." ],
      act_check2: [ '<33>{#p/story}* SILENTE - SAL 7 SAV 5\n* Şimdi yalnız, ve neşeyle dans ederek kendisini gösteriyor.' ],
      act_check3: [ '<32>{#p/story}* SILENTE - SAL 7 SAV 5\n* Seninle birlikteyken rahat hissediyor.\n* FAZLA rahat.' ],
      act_check4: [ "<32>{#p/story}* SILENTE - SAL 7 SAV 5\n* Sert durmasına rağmen, acı içinde olduğu bariz..." ],
      act_flirt: [ '<32>{#p/human}* (Silente ile flört ettin.)' ],
      flirtTalk: [ '<08>{#p/basic}{~}Selamm~' ],
      groupInsult: [ "<32>{#p/human}* (Silente'ye hakaret etmeye çalıştın, ancak o diğerlerine çok odaklı.)" ],
      groupStatus1: [ '<32>{#p/story}* Silente diğerlerine fısıldıyor.' ],
      groupStatus2: [ "<32>{#p/story}* Ortalık hamamböceği kapanı gibi kokmaya başladı." ],
      groupTalk1: [ '<08>{#p/basic}TEK AMAÇLI ADİ\n..' ],
      groupTalk2: [ '<08>{#p/basic}YÜCE ZİHNE İTAAT ET\n..' ],
      groupTalk3: [ '<08>{#p/basic}LEJYON! BİZ BİR LEJYONUZ!' ],
      groupTalk4: [ '<08>{#p/basic}SÜRÜYE KULAK VER\n..' ],
      groupTalk5: [ '<08>{#p/basic}HAYDİ HEP BERABER\n..' ],
      groupTalk6: [ "<08>{#p/basic}UMRUM DIŞI." ],
      name: '* Silente',
      perilStatus: [ '<32>{#p/story}* Silente pes etmeyi reddediyor.' ],
      soloInsult: [ "<32>{#p/human}* (Silente'ye hakaret etmeye çalıştın, ama o takmayacak kadar mutlu.)" ],
      soloStatus: [ "<32>{#p/story}* Silente bu galaksiden bihaber." ],
      soloTalk1: [ "<08>{#p/basic}{~}Kendim olmak en iyisi!" ],
      soloTalk2: [ '<08>{#p/basic}{~}La la~ Sadece kendin- ol~' ],
      soloTalk3: [ "<08>{#p/basic}{~}Yalnız kalmak gibisi yok!" ],
      soloTalk4: [ '<08>{#p/basic}{~}Mmm, ça ça ça!' ],
      soloTalk5: [ '<08>{#p/basic}{~}Salla kollarını, bebeğim~' ]
   },
   b_opponent_mushy: {
      act_challenge: [
         '<32>{#p/human}* (Mushy\'e düelloda meydan okudun.)',
         "<33>{#p/story}* Mushy'nin bu turluğuna HIZI arttı!"
      ],
      act_check: [ '<32>{#p/story}* MUSHY - SAL 6 SAV 6\n* Uzay kovboylarının dehşet hayranı.\n* Silahşör.' ],
      act_check2: [ '<32>{#p/story}* MUSHY - SAL 6 SAV 6\n* Uzay kovboylarının dehşet hayranı.\n* Seksi olanlar dahil.' ],
      act_check3: [ '<32>{#p/story}* MUSHY - SAL 6 SAV 6\n* Elinden geleni yaptığından ötürü bu silahşör etkilendi.' ],
      act_flirt: [ '<32>{#p/human}* (Mushy ile flört ettin.)' ],
      act_taunt: [ '<32>{#p/human}* (Mushy ile alay ettin.)' ],
      challengeStatus: [ '<32>{#p/story}* Mushy sıradaki meydan okumayı bekliyor.' ],
      challengeTalk1: [ "<08>{#p/basic}{~}Neyin varmış görelim." ],
      challengeTalk2: [ '<08>{#p/basic}{~}Beni alabileceğini mi sanıyorsun?' ],
      flirtStatus1: [ '<32>{#p/story}* Mushy, şaşkın ve azgın olan.' ],
      flirtTalk1: [ '<08>{#p/basic}{~}H-hey, kes şunu!' ],
      hurtStatus: [ '<32>{#p/story}* Mushy son mücadelesini veriyor.' ],
      idleTalk1: [ '<08>{#p/basic}{~}Bam!\nBam!\nBam!' ],
      idleTalk2: [ '<08>{#p/basic}{~}Eyerini hazırla!' ],
      idleTalk3: [ "<08>{#p/basic}{~}Hepsi bir günlük iş." ],
      name: '* Mushy',
      spareStatus: [ '<32>{#p/story}* Mushy saygısından önünde eğiliyor.' ],
      status1: [ '<32>{#p/story}* Mushy öne atıldı!' ],
      status2: [ '<32>{#p/story}* Mushy tek eli cebinde nişan alıyor.\n* Bir şekilde.' ],
      status3: [ '<32>{#p/story}* Mushy büyük bir vuruşma için hazırlanıyor.' ],
      status4: [ '<32>{#p/story}* Mushy tabanca kılıfına sarılıyor.' ],
      status5: [ '<32>{#p/story}* Yağmur yağmış gibi kokuyor.' ],
      tauntStatus1: [ "<32>{#p/story}* Mushy alay etmenden etkilenmemiş gibi davranıyor." ],
      tauntTalk1: [ "<08>{#p/basic}{~}Güya o bana işleyecek." ]
   },
   b_opponent_napstablook: {
      act_check: [ "<32>{#p/story}* NAPSTABLOOK - SAL 10 SAV 255\n* İşte Napstablook." ],
      act_check2: [
         "<32>{#p/story}* NAPSTABLOOK - SAL 10 SAV 255\n* Görünüşe göre artık burada bulunmak istemiyorlar."
      ],
      act_check3: [ '<32>{#p/story}* NAPSTABLOOK - SAL 10 SAV 255\n* Uzun bir aradan sonra, yeniden ümitli...' ],
      act_check4: [ '<32>{#p/story}* NAPSTABLOOK - SAL 10 SAV 255\n* Romantik gerilim hat safhaya ulaşmış durumda.' ],
      awkwardTalk: [ '<11>{#p/napstablook}{~}ııı...', '<11>{#p/napstablook}{~}tamam, öyleyse...?' ],
      checkTalk: [ "<11>{#p/napstablook}{~}o benim..." ],
      cheer0: [ '<32>{#p/human}* (Napstablook\'u teselli etmeye çalıştın.)' ],
      cheer1: [ '<32>{#p/human}* (Napstablook\'a sabırla gülümsedin.)' ],
      cheer2: [ '<32>{#p/human}* (Napstablook\'a ufak bir espri yaptın.)' ],
      cheer3: [ "<32>{#p/human}* (Napstablook'un silindir şapkasına hayranlığını gösteriyorsun.)" ],
      cheerTalk1: [ '<11>{#p/napstablook}{~}...?' ],
      cheerTalk2: [ '<11>{#p/napstablook}{~}heh heh...' ],
      cheerTalk3: [
         '<11>{*}{#p/napstablook}{~}bir şey {#x1}deneyeyim...{^20}{#x2}{^20}{%}',
         "<11>{*}{#p/napstablook}{~}ona {#x3}'şık blook'{^40}{%} diyorum",
         '<11>{*}{#p/napstablook}{~}beğendin mi?{^40}{%}'
      ],
      cheerTalk4: [ '<11>{#p/napstablook}{~}ah tanrım.....' ],
      consoleTalk1: [ '<11>{#p/napstablook}{~}aynen aynen...' ],
      consoleTalk2: [ '<11>{#p/napstablook}{~}yemem ben bunu...' ],
      consoleTalk3: [ "<11>{#p/napstablook}{~}sen üzgün değilsin..." ],
      deadTalk: [
         "<11>{#p/napstablook}{~}ımm... hayaletleri öldüremeyeceğini biliyorsun, değil mi...",
         "<11>{~}biz ruhsal varlıklar falanız da",
         "<11>{~}ben sadece kaba görünmemek için canımı azaltıyordum",
         '<11>{~}üzgünüm... işi daha da tuhaflaştırdım...',
         '<11>{~}beni yenmişsin gibi yap...',
         '<11>{~}ooooooooo'
      ],
      flirt1: [ '<32>{#p/human}* (Napstablook\'la flört ettin.)' ],
      flirt2: [ '<32>{#p/human}* (En iyi tavlama cümleni Napstablook üzerinde denedin.)' ],
      flirt3: [ '<32>{#p/human}* (Napstablook\'a kalpten bir iltifat ettin.)' ],
      flirt4: [ '<32>{#p/human}* (Napstablook\'u ona karşı olan duygularınla ilgili temin ediyorsun.)' ],
      flirtTalk1: [ "<11>{#p/napstablook}{~}seni sadece aşağıya çekerdim" ],
      flirtTalk2: [ "<11>{#p/napstablook}{~}oh.....\nonu daha önce duymuştum....." ],
      flirtTalk3: [ '<11>{#p/napstablook}{~}ııı... gerçekten de öyle mi?' ],
      flirtTalk4: [ "<11>{#p/napstablook}{~}ah, sen ciddisin...", '<11>{~}eyvah.....' ],
      idleTalk1: [ "<11>{#p/napstablook}{~}ben iyiyim, sağ ol" ],
      idleTalk2: [ '<11>{#p/napstablook}{~}sadece yuvarlanıyorum işte...' ],
      idleTalk3: [ '<11>{#p/napstablook}{~}kendi şeyime bakıyorum...' ],
      insultTalk1: [ '<11>{#p/napstablook}{~}biliyordum…' ],
      insultTalk2: [ '<11>{#p/napstablook}{~}her neyse...' ],
      insultTalk3: [ '<11>{#p/napstablook}{~}ne söyleyeceksen söyle...' ],
      insultTalk4: [ '<11>{#p/napstablook}{~}at hepsini içinden...' ],
      name: '* Napstablook',
      silentTalk: [ '<11>{#p/napstablook}{~}...' ],
      sincere: [ "<32>{#p/human}* (Napstablook'un silindir şapkasına çapkın bir yorum yaptın.)" ],
      sincereTalk: [ '<11>{#p/napstablook}{~}hehe... teşekkürler' ],
      status1: [ '<32>{#p/story}* İşte geliyor Napstablook.' ],
      status2: [ '<32>{#p/story}* Napstablook birazcık daha iyi görünüyor.' ],
      status3: [ '<32>{#p/story}* Napstablook sana bir şey göstermek istiyor.' ],
      status3a: [ '<32>{#p/story}* Napstablook cevabını bekliyor.' ],
      status4: [ "<32>{#p/story}* Napstablook'un gözleri ışıldıyor." ],
      status5: [ '<32>{#p/story}* Napstablook kesinlikle bununla nasıl baş edeceğini bilmiyor.' ],
      status5a: [ '<32>{#p/story}* Napstablook kendi varlığını sorguluyor.' ],
      status6: [ '<32>{#p/story}* Napstablook doğru anı bekliyor.' ],
      status7: [ '<32>{#p/story}* Napstablook sonraki hamleni bekliyor.' ],
      status8: [ '<32>{#p/story}* Napstablook uzaklara doğru bakıyor.' ],
      status9: [ "<32>{#p/story}* Napstablook burada olmamayı diliyor." ],
      status10: [ '<32>{#p/story}* Napstablook seni görmezden gelmek için elinden geleni yapıyor.' ],
      suck: [ '<32>{#p/human}* (Napstablook’a şapkasının rezalet olduğunu söyledin.)' ],
      threat: [ '<32>{#p/human}* (Napstablook’un tehdit ettin.)' ]
   },
   b_opponent_toriel: {
      spannerText: [ '<32>{#p/human}* (Alet anahtarını fırlattın.)\n* (Toriel onu alıp sana geri getiriyor.)' ],
      spannerTalk: [ '<11>{#p/toriel}{#f/22}Bu hiçbir işe yaramayacak, çocuğum.' ],
      spannerTalkRepeat: [ '<11>{#p/toriel}{#f/22}...' ],
      act_check: [ '<32>{#p/story}* TORİEL - SAL 80 SAV 80\n* Senin için en iyisini biliyor.' ],
      act_check2: [ '<32>{#p/story}* TORİEL - SAL 80 SAV 80\n* Kendini tutuyor gibi görünüyor.' ],
      act_check3: [ '<32>{#p/story}* TORİEL - SAV 80 SAL 80\n* Tasalı gözüküyor.' ],
      act_check4: [ '<32>{#p/story}* TORİEL - SAL 80 SAV 80\n* Sadece senin için en iyisini istiyor.' ],
      act_check5: [ '<32>{#p/story}* TORİEL - SAL 80 SAV 80\n* Senin \"sevimli” olduğunu düşünüyor.' ],
      precrime: [ '<20>{#p/asriel2}...' ],
      criminal1: (reveal: boolean) => [
         '<20>{#p/asriel2}{#f/3}Howdy, $(name).',
         "<20>{#f/1}It's good to be back.",
         "<20>{#f/2}What's that?\nYou didn't expect to see me again?",
         '<20>{#f/13}...\nOh, $(name)...',
         ...(reveal
            ? [ "<20>{#f/1}I've been waiting for this for a long time." ]
            : [
                 "<20>{#f/15}I've been trapped inside a star for so long, I...",
                 '<20>{#f/15}...',
                 "<20>{#f/16}Well, that's not important now.",
                 '<20>{#f/1}What matters is that things are back to how they should be.'
              ]),
         '<20>{#f/1}Hee hee hee...',
         "<20>{#f/2}I know you're empty inside, just like me.",
         "<20>{#f/5}We're still inseparable after all these years...",
         "<20>{#f/1}Listen.\nI have a plan that'll bring us closer than ever.",
         '<20>{#f/1}With me, you, and our stolen SOULs...',
         "<20>{#f/1}Let's destroy everything on this wretched outpost.",
         '<21>{#f/2}Anyone who dares to stand in the way of our perfect future...',
         "<20>{#f/1}Let's turn 'em all to dust."
      ],
      criminal2: [ '<20>{#p/asriel2}{#f/3}Welcome back, $(name).', '<20>{#f/1}Ready to pick up where we last left off?' ],
      criminal3: [ '<20>{#p/asriel2}{#f/3}Well then.', '<20>{#f/3}...', "<20>{#f/4}Let's just get going." ],
      cutscene1: [
         "<32>{#p/basic}* Belki de dinleyeceğin tek kişi olduğum içindir.",
         '<25>{#p/toriel}{#f/16}* ...!?',
         "<32>{#p/basic}* Ama ben ne bilirim ki, ha?\n* Ben sadece tatlı, masum küçük bir çocuğum."
      ],
      cutscene2: [
         '<25>{#p/toriel}{#f/3}* ...',
         '<25>{#p/toriel}{#f/4}* Bu mümkün değil...',
         '<25>{#f/0}* Rüya görüyor olmalıyım.\n* Ya da halüsinasyon.\n* Ya da belki...',
         '<32>{#p/basic}* Hayır.',
         '<32>{#p/basic}* Bu gerçek.',
         '<25>{#p/toriel}{#f/5}* Ama sen öldün, $(name).',
         '<25>{#f/5}* Benimle konuşuyor olmanın imkanı yok.',
         "<32>{#p/basic}* O zaman bu bir rüyaymış gibi kendini kandır.",
         '<32>{#p/basic}* Böylesi senin için uygunsa.',
         '<25>{#p/toriel}{#f/5}* ...',
         '<25>{#p/toriel}{#f/9}* Ne istiyorsun?',
         '<32>{#p/basic}* Toriel...',
         "<32>{#p/basic}* İnsanlığa karşı nasıl hissettiğimi biliyorsun, değil mi?",
         '<25>{#p/toriel}{#f/13}* Doğru.',
         '<32>{#p/basic}* Yanlış.',
         '<32>{#p/basic}* ... bu insan hakkında değil.',
         "<32>* O buraya geldiğinden beri onu takip ediyorum...",
         "<32>* Ve şimdi benden sana ulaşmamı istiyor.",
         '<32>* Sence bu ne anlama geliyor?',
         '<25>{#p/toriel}{#f/13}* ...',
         '<32>{#p/basic}* Bu, onu bırakman gerektiği anlamına geliyor.',
         '<25>{#p/toriel}{#f/12}* ... neyin tehlikede olduğunu anlamıyor musun?',
         '<25>{#f/11}* Eğer onun gitmesine izin verirsem, mutlaka ölecektir.',
         '<32>{#p/basic}* ... hadi ama.',
         "<32>{#p/basic}* Aslında bunu bu yüzden yapmıyorsun, öyle değil mi?",
         '<25>{#p/toriel}{#f/12}* Bu tavrına bakılırsa, belki de bu gerçekten sensin, $(name).',
         '<25>{#p/toriel}{#f/11}* Sen her zaman otoritemi sorguladın.',
         '<32>{#p/basic}* Buna her türlü hakkımın olduğunu düşünüyorum.',
         '<32>{#p/basic}* Onu burada tutmak istiyorsun çünkü Outlands\'in ötesinde var olanlardan korkuyorsun.',
         "<33>{#p/basic}* Ama artık hiçbir şey yüz yıl önceki gibi değil.",
         "<33>{#p/basic}* Sen sadece gidip kendi gözlerinle görmeye korktuğun için bu konuda cahilsin.",
         '<25>{#p/toriel}{#f/13}* ...',
         "<25>{#p/toriel}{#f/13}* ... ama eğer gitmesine izin verirsem, onun...",
         '<32>{#p/basic}* Yanında olamayacak mısın?',
         '<32>{#p/basic}* Hey, o hissi biliyorum.',
         '<32>{#p/basic}* Ama onu burada tutmak zaten onu ölüme mahkûm etmek olurdu.',
         "<32>{#p/basic}* Yaşamaya değer hiçbir şey yapma fırsatı yoksa hayatın ne anlamı var?",
         '<25>{#p/toriel}{#f/13}* ...',
         '<25>{#p/toriel}{#f/13}* $(name), ben...',
         '<32>{#p/basic}* Ona yedek bir cep telefonu vermiştin, hatırlıyor musun?',
         "<32>{#p/basic}* Hattı açık tut, ve belki seni arar.",
         '<25>{#p/toriel}{#f/9}* ... peki ya sen?',
         "<32>{#p/basic}* Bak.\n* Ben iyi olacağım.",
         "<32>{#p/basic}* Tek isteğim, o gittikten sonra ONU unutmaman.",
         '<25>{#p/toriel}{#f/13}* ...',
         '<32>{#p/basic}* Hoşça kal, Toriel.',
         '<25>{#p/toriel}{#f/14}* ... hoşça kal, $(name).'
      ],
      death1: [
         '<11>{#p/toriel}{#f/21}{#v/1}{#i/3}{#x1}{@random=1.1/1.1}Urgh...',
         '<11>{#v/1}{#i/3}{#x1}{@random=1.1/1.1}To strike me down at my weakest moment...',
         '<11>{#v/1}{#i/3}{#x1}{@random=1.1/1.1}...',
         '<11>{#v/2}{#i/4}{#x2}{@random=1.1/1.1}Ha...\nHa...',
         '<11>{#v/2}{#i/4}{#x2}{@random=1.1/1.1}It seems, young one...',
         '<11>{#v/3}{#i/5}{#x2}{@random=1.2/1.2}Bunca zamandır... sana güvendiğim için bir aptalmışım...'
      ],
      death2: [
         '<11>{#p/toriel}{#f/21}{#v/1}{#i/3}{#x1}{@random=1.1/1.1}Urgh...',
         '<11>{#v/1}{#i/3}{#x3}{@random=1.1/1.1}Seni onlardan koruduğumu düşünüyorken...',
         '<11>{#v/1}{#i/3}{#x4}{@random=1.1/1.1}...',
         '<11>{#v/2}{#i/4}{#x2}{@random=1.1/1.1}Ha...\nHa...',
         '<11>{#v/2}{#i/4}{#x1}{@random=1.1/1.1}It seems, young one...',
         '<11>{#v/3}{#i/5}{#x2}{@random=1.2/1.2}Aslında onları... senden koruyormuşum...'
      ],
      death3: [
         '<11>{#p/toriel}{#f/21}{#v/1}{#i/3}{#x1}{@random=1.1/1.1}Urgh...',
         '<11>{#v/1}{#i/3}{#x1}{@random=1.1/1.1}Sen düşündüğümden daha güçlüsün...',
         '<11>{#v/1}{#i/3}{#x3}{@random=1.1/1.1}Dinle beni, küçüğüm...',
         '<11>{#v/1}{#i/3}{#x3}{@random=1.1/1.1}Birkaç dakika içinde, toza döneceğim...',
         '<11>{#v/1}{#i/3}{#x3}{@random=1.1/1.1}Bu olduğunda, benim RUH\'umu almalısın...',
         '<11>{#v/1}{#i/3}{#x1}{@random=1.1/1.1}Buradan kaçabilmenin tek gerçek yolu bu.',
         "<11>{#v/2}{#i/4}{#x3}{@random=1.1/1.1}Asgore'un planının... başarılı olmasına... izin veremezsin.",
         '<11>{#v/2}{#i/4}{#x1}{@random=1.1/1.1}...',
         '<11>{#v/3}{#i/5}{#x2}{@random=1.2/1.2}Çocuğum...',
         "<11>{#v/3}{#i/5}{#x4}{@random=1.2/1.2}İyi ol... olur mu?"
      ],
      magic1: [ '<20>{#p/asriel2}{#f/3}Beni takip et.' ],
      name: '* Toriel',
      spareTalk1: [ '<11>{#p/toriel}{#f/11}...' ],
      spareTalk2: [ '<11>{#p/toriel}{#f/11}...\n...' ],
      spareTalk3: [ '<11>{#p/toriel}{#f/11}...\n...\n...' ],
      spareTalk4: [ '<11>{#p/toriel}{#f/17}...?' ],
      spareTalk5: [ '<11>{#p/toriel}{#f/17}Ne yapıyorsun?' ],
      spareTalk6: [ '<11>{#p/toriel}{#f/17}...' ],
      spareTalk7: [ '<11>{#p/toriel}{#f/17}Ne ispatlamaya çalışıyorsun?' ],
      spareTalk8: [ '<11>{#p/toriel}{#f/17}...' ],
      spareTalk9: [ '<11>{#p/toriel}{#f/12}Ya benimle savaş ya da uzaklaş!' ],
      spareTalk10: [ '<11>{#p/toriel}{#f/12}Bana öyle bakmayı bırak!' ],
      spareTalk11: [ '<11>{#p/toriel}{#f/12}Uzaklaş buradan!' ],
      spareTalk12: [ '<11>{#p/toriel}{#f/13}...' ],
      spareTalk13: [ '<11>{#p/toriel}{#f/13}...\n...' ],
      spareTalk14: [ '<11>{#p/toriel}{#f/13}...\n...\n...' ],
      spareTalk15: [
         '<11>{#p/toriel}{#f/13}Eve gitmek istediğini biliyorum...',
         '<11>{#p/toriel}{#f/9}Ama oraya giden yol tehlikeli olacaktır.'
      ],
      spareTalk16: [ '<11>{#p/toriel}{#f/14}O yüzden lütfen... diğer tarafa geri dön.' ],
      spareTalk17: [
         '<11>{#p/toriel}{#f/13}Çok fazla şeyimiz olmadığını biliyorum...',
         '<11>{#p/toriel}{#f/10}Ama yine de güzel bir hayatımız olabilir.'
      ],
      spareTalk18: [
         '<11>{#p/toriel}{#f/13}Sen ve ben, bir aile gibi...',
         '<11>{#p/toriel}{#f/10}Bu kulağa hoş gelmiyor mu?'
      ],
      spareTalk19: [ '<11>{#p/toriel}{#f/21}...' ],
      spareTalk20: [ '<11>{#p/toriel}{#f/18}Neden bunu bu kadar zorlaştırıyorsun?' ],
      spareTalk21: [ '<11>{#p/toriel}{#f/21}...' ],
      spareTalk22: [ '<11>{#p/toriel}{#f/18}Lütfen, sadece...', '<11>{#p/toriel}{#f/9}Diğer tarafa geri dön.' ],
      spareTalk23: [ '<11>{#p/toriel}{#f/21}...' ],
      spareTalk24: [ '<11>{#p/toriel}{#f/18}Ah, çocuk...' ],
      spareTalk28b: [
         '<11>{#p/toriel}{#f/9}Belki de seni böyle durdurmaya çalışmak...',
         '<11>{#f/13}Yalnızca benim aptallığımdı...',
         '<11>{#f/9}Belki de sadece gitmene izin vermeliydim.'
      ],
      spareTalk28c: [ '<11>{#p/toriel}{#f/17}...?', '<11>{#f/17}Neden \"$(name)\" için sesleniyorsun?' ],
      status1: [ '<32>{#p/story}* Toriel artık karşında duruyor.' ],
      status2: [ '<32>{#p/story}* Toriel bir büyü saldırısı hazırlıyor.' ],
      status3: [ '<32>{#p/story}* Toriel soğuk davranıyor.' ],
      status4: [ '<32>{#p/story}* Toriel sana doğru bakıyor.' ],
      status5: [ '<32>{#p/story}* ...' ],
      assistStatus: [ '<32>{#p/basic}* Başka bir yol olmalı...' ],
      talk1: [ '<32>{#p/human}* (Toriel’den geçmene izin vermesini istedin.)\n* (Etkisi yok.)' ],
      talk2: [ "<32>{#p/human}* (Toriel’e bunu gerçekten niye yaptığını sordun.)\n* (Hafiften irkiliyor.)" ],
      talk3: [ '<32>{#p/human}* (Toriel’e durması için yalvardın.)\n* (Durmaktan çekiniyor.)' ],
      talk4: [
         '<32>{#p/human}* (Toriel’e durması için tekrar yalvardın.)',
         '<32>{#p/basic}* ... belki de onun için çok fazla şey risk altında.'
      ],
      talk5: [ '<32>{#p/human}* (Toriel’e bağırdın.)\n* (Toriel gözlerini kapatıp derin bir nefes alıyor.)' ],
      talk6: [
         '<32>{#p/human}* (Toriel’e bir daha bağırdın.)',
         "<32>{#p/basic}* ... belki de konuşmak bir fayda etmeyecek gibi."
      ],
      talk7: [ "<32>{#p/human}* (Ama söyleyecek başka bir şey düşünemedin.)" ],
      talk8: [ '<32>{#p/human}* (Ama artık bunu yapmanın bir manası kalmamıştı.)' ],
      theft: [ '<20>{*}{#p/twinkly}Benim.{^15}{%}' ]
   },

   c_name_outlands: {
      hello: 'Merhaba De',
      about: 'Hakkında',
      mom: 'Ona \"Anne\" De',
      flirt: 'Flört Et',
      toriel: "Toriel'in Telefonu",
      puzzle: 'Bulmacada Yardım',
      insult: 'Hakaret Et'
   },

   c_call_outlands: {
      about1: [
         '<25>{#p/toriel}{#f/1}* Benim hakkımda daha fazlasını mı bilmek istiyorsun...?',
         '<25>{#f/0}* Yani, korkarım ki söyleyecek pek bir şey yok.',
         '<25>{#f/0}* Ben yalnızca çok sık endişelenen yaşlı, ahmak bir hanımım!'
      ],
      about2: [
         '<25>{#p/toriel}{#f/1}* Eğer gerçekten benim hakkımda daha fazlasını bilmek istiyorsan...',
         '<25>{#f/1}* Neden etrafa bir göz gezdirmiyorsun...?',
         '<25>{#f/0}* Gördüğün şeylerin çoğunun inşa edilmesine benim yardımım dokundu.'
      ],
      about3: [
         '<25>{#p/toriel}{#f/1}* Eğer gerçekten benim hakkımda daha fazlasını bilmek istiyorsan...',
         '<25>{#f/2}* Telefonda bana hakaret etmeden önce iki kere düşünmelisin!'
      ],
      flirt1: [
         '<25>{#p/toriel}{#f/7}* ... ha?',
         '<25>{#f/1}* Ah, heh... heh...',
         '<25>{#f/6}* Hahaha!\n* Yanağını sıkabilirdim!',
         '<25>{#f/0}* Benim gibi yaşlı bir kadından daha iyisini mutlaka bulabilirsin.'
      ],
      flirt2: [
         '<25>{#p/toriel}{#f/7}* ...\n* Ah canım, sen ciddi misin...?',
         '<25>{#f/1}* Çocuğum, bunun acınası mı yoksa sevimli mi olduğunu bilemiyorum.'
      ],
      flirt3: [
         '<25>{#p/toriel}{#f/7}* ...\n* Ah canım, sen ciddi misin...?',
         '<25>{#f/5}* Hem de bana \"Anne\" diye seslenmenden sonra...',
         '<25>{#f/1}* Peki öyleyse.\n* Sen oldukça \"ilginç\" bir çocuksun.'
      ],
      flirt4: [ '<25>{#p/toriel}{#f/3}* ...', '<25>{#p/toriel}{#f/4}* Seni anlamaya başlayamıyorum.' ],
      hello: [
         [
            '<25>{#p/toriel}* Bu Toriel.',
            '<25>{#f/1}* Sadece merhaba mı demek istemiştin...?',
            '<25>{#f/0}* Peki öyleyse.\n* \"Merhaba!\"',
            '<25>{#f/0}* Umarım bu yeterlidir.\n* Hee hee.'
         ],
         [
            '<25>{#p/toriel}* Bu Toriel.',
            '<25>{#f/1}* Yeniden mi merhaba demek istedin?',
            '<25>{#f/0}* \"Selamlar\" olsun!',
            '<25>{#f/1}* Bu yeterli midir?'
         ],
         [
            '<25>{#p/toriel}{#f/1}* Sıkıldın mı?',
            '<25>{#f/0}* Özür dilerim.\n* Sana yapacak bir şey vermeliydim.',
            '<25>{#f/1}* Neden dikkatini dağıtmak için hayal gücünü kullanmıyorsun?',
            '<25>{#f/0}* Sanki bir... savaş pilotuymuşsun gibi hayal et!',
            '<25>{#f/1}* Dönüp duruyor, ışık hızında fıçı tonoları yapıyormuş gibi...',
            '<25>{#f/1}* Bunu benim için yapabilir misin?'
         ],
         [
            '<25>{#p/toriel}{#f/5}* Merhaba, küçüğüm.',
            '<25>{#f/9}* Üzgünüm, ama söyleyecek başka pek bir şeyim yok.',
            '<25>{#f/1}* Ama sesini duymak hoştu...'
         ]
      ],
      helloX: [ '<25>{#p/toriel}{#g/torielLowConcern}* Merhaba?' ],
      mom1: [
         '<25>{#p/toriel}* ...',
         '<25>{#f/7}* Ha?\n* Az önce bana \"Anne\" mi dedin?',
         '<25>{#f/1}* Yani...\n* Sanıyorum ki...',
         '<25>{#f/1}* Bu seni mutlu eder miydi?',
         '<25>{#f/1}* Beni...\n* \"Anne\" diye çağırmak?',
         '<25>{#f/0}* Peki öyleyse.\n* Bana istediğin şekilde seslen!'
      ],
      mom2: [ '<25>{#p/toriel}{#f/7}* ...\n* Ah, ben... yine mi?', '<25>{#f/0}* Hee hee...\n* Sen çok tatlı bir çocuksun.' ],
      mom3: [
         '<25>{#p/toriel}{#f/7}* ...\n* Ah, ben... yine mi?',
         '<25>{#f/5}* Hem de benimle flört etmenden sonra...',
         '<25>{#f/1}* Peki öyleyse.\n* Sen oldukça \"ilginç\" bir çocuksun.'
      ],
      mom4: [ '<25>{#p/toriel}{#f/5}* ...' ],
      puzzle1: [
         '<25>{#p/toriel}{#f/1}* Bir bulmacada yardım mı...?',
         '<25>{#f/1}* Henüz odadan ayrılmadın, değil mi?',
         '<25>{#f/0}* Benim geri dönmem için bekle, ve birlikte çözebiliriz.'
      ],
      puzzle2: [
         '<25>{#p/toriel}{#f/1}* Bir bulmacada yardım mı...?',
         '<25>{#f/23}* ... bir şey bana senin gerçekten yardımıma ihtiyacın olmadığını söylüyor.'
      ],
      puzzle3: [
         '<25>{#p/toriel}{#f/1}* Bir bulmacada yardım mı...?',
         '<25>{#f/5}* ...\n* Korkarım ki sana şu anda yardımcı olamayacağım.',
         '<25>{#f/0}* Benim geri dönmem için bekle, ve birlikte çözebiliriz.'
      ],
      insult1: (sus: boolean) =>
         sus
            ? [
                 '<25>{#p/toriel}{#f/0}* Merhaba?\n* Bu...',
                 '<25>{#f/2}* ...!',
                 '<25>{#f/3}* Bunu benim için tekrarlayabilir misin?'
              ]
            : [
                 '<25>{#p/toriel}{#f/0}* Merhaba?\n* Bu...',
                 '<25>{#f/2}* ...!',
                 '<25>{#f/1}* Çocuğum... Bunun senin sandığın anlama geldiğini düşünmüyorum.'
              ],
      insult2: (sus: boolean) =>
         sus
            ? [ '<25>{#p/toriel}{#f/15}* ...', '<25>{#f/12}* Bunu bana söylememişsin gibi davranacağım.' ]
            : [ '<25>{#p/toriel}{#f/1}* Çocuğum...' ]
   },

   i_candy: {
      battle: {
         description: 'Has a distinct, non-licorice flavor.',
         name: 'Candy'
      },
      drop: [ '<32>{#p/human}* (You throw away the Monster Candy.)' ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ '<32>{#p/human}* (10 HP.)' ]
            : [ '<32>{#p/basic}* \"Monster Candy\" Heals 10 HP\n* Has a distinct, non-licorice flavor.' ],
      name: 'Canavar Şekeri',
      use: [ '<32>{#p/human}* (You eat the Monster Candy.)' ]
   },
   i_water: {
      battle: {
         description: 'Smells like Dihydrogen Monoxide.',
         name: 'Water'
      },
      drop: [ '<32>{#p/human}* (You throw away the Water.)' ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ '<32>{#p/human}* (12 HP.)' ]
            : [ '<32>{#p/basic}* \"Water\" Heals 12 HP\n* Smells like Di-Hydrogen Monoxide.' ],
      name: 'Water',
      use: () => [
         '<32>{#p/human}* (You drink the Water.)',
         ...(SAVE.data.b.ufokinwotm8 ? [] : [ "<33>{#p/human}* (You're filled with hydration.)" ]) 
      ]
   },
   i_chocolate: {
      battle: {
         description: 'A well-deserved chocolate bar.',
         name: 'Çikolata'
      },
      drop: () => [
         '<32>{#p/human}* (You throw away the Chocolate Bar.)',
         ...(SAVE.data.b.svr || world.darker ? [] : [ '<32>{#p/basic}* ... oh well.' ])
      ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ '<32>{#p/human}* (19 HP. This item seems to remind you of someone.)' ]
            : [ '<32>{#p/basic}* \"Chocolate Bar\" Heals 19 HP\n* It\'s a well-deserved treat.' ],
      name: 'Chocolate Bar',
      use: () => [
         '<32>{#p/human}* (You eat the Chocolate Bar.)',
         ...(battler.active && battler.alive[0].opponent.metadata.reactChocolate
            ? [ '<32>{#p/basic}* Toriel recognizes the scent, and smiles a little.' ]
            : [])
      ]
   },
   i_delta: {
      battle: {
         description: 'This substance is said to have highly relaxing properties.',
         name: 'Δ-9'
      },
      drop: [ '<32>{#p/human}* (You throw away the Δ-9.)' ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ '<32>{#p/human}* (5 HP. You feel strangely about this item.)' ]
            : [ '<32>{#p/basic}* \"Δ-9\" Heals 5 HP\n* This substance is said to have highly relaxing properties.' ],
      name: 'Δ-9',
      use: [ '<32>{#p/human}* (You ingest the Δ-9.)' ]
   },
   i_halo: {
      battle: {
         description: 'A headband with its own gravity field.',
         name: 'Halo'
      },
      drop: [ '<32>{#p/human}* (You fling the Halo away like a frisbee.)' ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ '<32>{#p/human}* (3 DF.)' ]
            : [ '<32>{#p/basic}* \"Halo\" (3 DF)\n* A headband with its own gravity field.' ],
      name: 'Halo',
      use: () => [
         '<32>{#p/human}* (You don the Halo.)',
         ...(SAVE.data.b.svr && !SAVE.data.b.freedom && asrielinter.i_halo_use++ < 1
            ? [ '<25>{#p/asriel1}{#f/20}* I think it suits you.' ]
            : [])
      ]
   },
   i_little_dipper: {
      battle: {
         description: 'A whacking spoon.',
         name: 'Dipper'
      },
      drop: [ '<32>{#p/human}* (You throw away the Little Dipper.)' ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ '<32>{#p/human}* (3 AT.)' ]
            : [ '<32>{#p/basic}* \"Little Dipper\" (3 AT)\n* A whacking spoon.' ],
      name: 'Little Dipper',
      use: [ '<32>{#p/human}* (You equip the Little Dipper.)' ]
   },
   i_pie: {
      battle: {
         description: 'Ev yapımı karamelli-tarçınlı turta, bir dilim.',
         name: 'Turta'
      },
      drop: [ '<32>{#p/human}* (You throw away the Butterscotch Pie.)' ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ '<32>{#p/human}* (99 HP.)' ]
            : [ '<32>{#p/basic}* \"Butterscotch Pie\" Heals 99 HP\n* Homemade butterscotch-cinnamon pie, one slice.' ],
      name: 'Karamelli Turta',
      use: [ '<32>{#p/human}* (You eat the Butterscotch Pie.)' ]
   },
   i_pie2: {
      battle: {
         description: 'Klasik aile tarifi.',
         name: 'Salyangozlu Turta'
      },
      drop: [ '<32>{#p/human}* (You throw away the Snail Pie.)' ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ '<32>{#p/human}* (99 HP.)' ]
            : [ '<32>{#p/basic}* \"Snail Pie\" Heals 99 HP\n* Classic family recipe.' ],
      name: 'Salyangozlu Turta',
      use: [ '<32>{#p/human}* (You eat the Snail Pie.)' ]
   },
   i_pie3: {
      battle: {
         description: 'Despite being soup-ified, the pie remains delicious.',
         name: 'Turta Çorbası'
      },
      drop: [ '<32>{#p/human}* (You dump the Pie Soup and the spoon that came with it.)' ],
      info: [ '<32>{#p/basic}* \"Pie Soup\" Heals 49 HP\n* Despite being soup-ified, the pie remains delicious.' ],
      name: 'Turta Çorbası',
      use: [ '<32>{#p/human}* (You consume the Pie Soup with the provided spoon.)' ]
   },
   i_pie4: {
      battle: {
         description: 'Neticede eylemlerin sonuçları vardır...',
         name: 'Yanmış Turta'
      },
      drop: [ '<32>{#p/human}* (You toss the Burnt Pie to the side like it never existed.)' ],
      info: [ '<32>{#p/basic}* \"Burnt Pie\" Heals 39 HP\n* Actions do have their consequences...' ],
      name: 'Yanmış Turta',
      use: [ '<32>{#p/human}* (You eat the Burnt Pie.)' ]
   },
   i_snails: {
      battle: {
         description: 'A plate of fried snails.\nFor breakfast, of course.',
         name: 'Salyangozlar'
      },
      drop: [ '<32>{#p/human}* (You throw away the Fried Snails.)' ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ '<32>{#p/human}* (19 HP.)' ]
            : [ '<32>{#p/basic}* \"Fried Snails\" Heals 19 HP\n* A plate of fried snails.\n* For breakfast, of course.' ],
      name: 'Fried Snails',
      use: [ '<32>{#p/human}* (You eat the Fried Snails.)' ]
   },
   i_soda: {
      battle: {
         description: 'A sickly, dark yellow liquid.',
         name: 'Soda'
      },
      drop: () => [
         '<32>{#p/human}* (You throw away the Fizzli Soda.)',
         ...(SAVE.data.b.svr || world.darker ? [] : [ '<32>{#p/basic}* Good riddance.' ])
      ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ '<32>{#p/human}* (8 HP.)' ]
            : [ '<32>{#p/basic}* \"Fizzli Soda\" Heals 8 HP\n* A dark, sickly yellow liquid.' ],
      name: 'Fizzli Soda',
      use: () => [
         '<32>{#p/human}* (You drink the Fizzli Soda.)',
         ...(SAVE.data.b.svr || world.darker ? [] : [ '<32>{#p/basic}* Yuck!' ])
      ]
   },
   i_spacesuit: {
      battle: {
         description: 'It came with the craft you crash-landed in.',
         name: 'Spacesuit'
      },
      drop: [ '<32>{#p/human}* (You throw away the Worn Spacesuit.)' ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ '<32>{#p/human}* (20 HP. The last remaining fragment of a spacecraft flown in exile.)' ]
            : [ '<32>{#p/basic}* \"Worn Spacesuit\" Heals 20 HP\n* It came with the craft you crash-landed in.' ],
      name: 'Worn Spacesuit',
      use: [ '<33>{#p/human}* (After using its last heal-pak, the Worn Spacesuit fell apart.)' ]
   },
   i_spanner: {
      battle: {
         description: 'A rusty old wrench.',
         name: 'Alet Anahtarı'
      },
      drop: [ '<32>{#p/human}* (Paslı Anahtar’ı attın.)' ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* (A trusty tool forged from beyond the galaxy's edge.)" ]
            : [ '<32>{#p/basic}* A rusty old wrench.' ],
      name: 'Paslı Anahtar',
      use: () => [
         ...(battler.active && battler.alive[0].opponent.metadata.reactSpanner
            ? []
            : [ '<32>{#p/human}* (Alet anahtarını havaya salladın.)\n* (Hiçbir şey olmadı.)' ])
      ]
   },
   i_starbertA: {
      battle: {
         description: 'The first of a limited run of Super Starwalker comics.',
         name: 'Starwalker 1'
      },
      drop: [ '<32>{#p/human}* (You throw away Super Starwalker 1.)' ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ '<32>{#p/human}* (It seems like the beginning of a journey.)' ]
            : [ '<32>{#p/basic}* The first of a limited run of Super Starwalker comics.' ],
      name: 'Super Starwalker 1',
      use: () => (battler.active ? [ '<32>{#p/human}* (You read Super Starwalker 1.)', '<32>* (Nothing happens.)' ] : [])
   },
   i_starbertB: {
      battle: {
         description: 'The second of a limited run of Super Starwalker comics.',
         name: 'Starwalker 2'
      },
      drop: [ '<32>{#p/human}* (You throw away Super Starwalker 2.)' ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ '<32>{#p/human}* (It seems like the middle of a journey.)' ]
            : [ '<32>{#p/basic}* The second of a limited run of Super Starwalker comics.' ],
      name: 'Super Starwalker 2',
      use: () =>
         battler.active
            ? [
                 '<32>{#p/human}* (You read Super Starwalker 2.)',
                 ...(SAVE.data.b.stargum
                    ? [ '<32>* (Nothing happens.)' ]
                    : [
                         '<32>* (You found a piece of gum taped to the comic strip.)',
                         choicer.create('* (Use the gum?)', 'Evet', 'Hayır')
                      ])
              ]
            : []
   },
   i_starbertC: {
      battle: {
         description: 'The third of a limited run of Super Starwalker comics.',
         name: 'Starwalker 3'
      },
      drop: [ '<32>{#p/human}* (You throw away Super Starwalker 3.)' ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ '<32>{#p/human}* (It seems like the end of a journey... or is it a new beginning?)' ]
            : [ '<32>{#p/basic}* The third of a limited run of Super Starwalker comics.' ],
      name: 'Super Starwalker 3',
      use: () => (battler.active ? [ '<32>{#p/human}* (You read Super Starwalker 3.)', '<32>* (Nothing happens.)' ] : [])
   },
   i_steak: {
      battle: {
         description: 'Questionable at best.',
         name: 'Steak'
      },
      drop: () => [
         '<32>{#p/human}* (You throw away the Sizzli Steak.)',
         ...(SAVE.data.b.svr || world.darker || SAVE.data.b.ufokinwotm8
            ? []
            : [ "<32>{#p/basic}* Well, that won't be missed." ])
      ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ '<32>{#p/human}* (14 HP.)' ]
            : [ '<32>{#p/basic}* \"Sizzli Steak\" Heals 14 HP\n* Questionable.' ],
      name: 'Sizzli Steak',
      use: () => [
         '<32>{#p/human}* (You eat the Sizzli Steak.)',
         ...(SAVE.data.b.svr || world.darker || SAVE.data.b.ufokinwotm8 ? [] : [ '<32>{#p/basic}* İğrenç!' ])
      ]
   },

   k_coffin: {
      name: 'Secret Key',
      description: () =>
         SAVE.data.b.w_state_secret
            ? 'Used to access a hidden room in the Outlands.'
            : "Acquired from the sock drawer in Toriel's room."
   },

   c_call_toriel: <Partial<CosmosKeyed<CosmosProvider<string[]>, string>>>{
      w_start: [
         '<25>{#p/toriel}{#f/0}* Ah, elbette.\n* Orası senin kaza yaptığın yer olmalı.',
         '<25>{#f/0}* Buraya gelen diğer insanlar da oraya iniş yapmışlardı.',
         '<25>{#f/1}* Burada güç kalkanı ile ilgili bir şey olmalı...',
         '<25>{#f/0}* ... bu gelen araçların hep bu vektörde uçmasını sağlıyordur.'
      ],
      w_twinkly: () =>
         SAVE.data.b.toriel_twinkly
            ? [
                 '<25>{#p/toriel}{#f/1}* Orası seni ilk bulduğum yer mi?',
                 '<25>{#f/5}* Seni rahatsız eden o konuşan yıldız, bir süredir baş belası olmuştur.',
                 '<25>{#f/1}* Daha önce onunla konuşmaya çalıştım ama...',
                 '<25>{#f/9}* Çabalarım hiçbir zaman tamamıyla bir yere varamadı.'
              ]
            : [
                 '<25>{#p/toriel}{#f/1}* Orası seni ilk bulduğum yer mi?',
                 '<25>{#f/5}* Tamamen tek başına, yapayalnız bir şekilde...',
                 '<25>{#f/0}* Seni içeri almak için orada bulunmam iyi olmuş.'
              ],
      w_entrance: [
         '<25>{#p/toriel}{#f/1}* Outlands\'in girişi...',
         '<25>{#f/0}* Evet, buradan önceki alan aslında onun bir parçası değil.',
         '<25>{#f/5}* Orası daha çok... işaretlenmemiş bir kaza alanı.',
         '<25>{#f/1}* İlk insan doğrudan Outlands\'in İÇİNE çarptıktan sonra...',
         '<25>{#f/0}* Ayrı bir platformun eklenmesi kaçınılmazdı.'
      ],
      w_lobby: [
         '<25>{#p/toriel}{#f/0}* Bu odadaki bulmaca görselleştirme için iyi iş çıkarıyor.',
         '<25>{#f/1}* Ne de olsa, başka ne için kurardım ki?',
         '<25>{#f/5}* Ne yazık ki, insanların tümü bu niyetimi anlamamıştı.',
         '<25>{#f/3}* Biri doğrudan güvenlik kalkanına koşmayı bile denemişti...',
         '<25>{#f/0}* ... şifa büyüsü kullandığımı söylemek yeterli olacaktır.'
      ],
      w_tutorial: [
         '<25>{#p/toriel}* Favorim olan bulmaca bu değilse, ne olacağını bilmiyorum!',
         '<25>* İşbirliğini öğretme şekli en değerli gördüğüm yanıdır.',
         '<25>{#f/1}* Zira hayalim olan işim öğretmen olmak olduğu için...',
         '<25>{#f/0}* Hep böyle önemli dersleri aktarmanın yollarını arıyorum.'
      ],
      w_dummy: () => [
         '<25>{#p/toriel}{#f/1}* Eğitim odası mı...?',
         ...(SAVE.data.n.plot < 42
            ? [
                 [
                    '<25>{#f/0}* Hee hee, hala o dersi halletme şeklin ile gurur duyuyorum.',
                    '<25>{#f/1}* Arkadaşça bir sohbet başlatmak alternatifinden iyidir...',
                    '<25>{#f/0}* Elbette tek sebebi arkadaş edinmene yardımcı olması değil!'
                 ],
                 [],
                 [
                    '<25>{#f/5}* ...',
                    '<25>{#f/5}* Her ne kadar bu dersi senden istediğim şekilde ele almış olmasan da...',
                    '<25>{#f/0}* En azından çatışmadan kaçınmış oldun.',
                    '<25>{#f/0}* Alternatifleri göz önüne aldığımızda, bu... tercih edilebilir bir sonuçtu.'
                 ],
                 [
                    '<25>{#f/0}* ... hmm.',
                    '<25>{#f/0}* Doğrusu, olanlara nasıl tepki vereceğimi hala bilmiyorum.',
                    '<25>{#f/1}* Ama izlemesinin büyüleyici olduğunu söylemeliyim...',
                    '<25>{#f/3}* Sadece ikiniz...\n* Öylece birbirinize bakıyordunuz...',
                    '<25>{#f/4}* ...'
                 ],
                 [
                    '<25>{#f/1}* Olanları beklediğimi söyleyemem ama...',
                    '<25>{#f/0}* Yine de sevimliydi.',
                    '<25>{#f/0}* Şaşırtıcı bir şekilde, bu yaklaşımı deneyen ilk insan sendin.',
                    '<25>{#f/1}* Öyle ki, geriye dönüp bakınca çok bariz bir çözüm gibi görünüyor...'
                 ],
                 [],
                 [
                    '<25>{#f/5}* ...',
                    '<25>{#f/7}* ...',
                    '<25>{#f/8}* Hahaha!\n* Ah, gülmeden edemiyorum!',
                    '<25>{#f/6}* Çekinmeden öylece flört etmeyi seçmen...',
                    '<25>{#f/1}* Beni kesinlikle şaşırttı!',
                    '<25>{#f/0}* Dinle beni, çocuğum.',
                    '<25>{#f/9}* Düşmanlarınla flört etmek her zaman ideal olmayabilir.',
                    '<25>{#f/10}* Ama, eğer bunu bir daha BU ŞEKİLDE yapabilirsen...',
                    '<25>{#f/0}* Bunun ile neler başarabileceğini kimse bilemez.'
                 ]
              ][SAVE.data.n.state_wastelands_dummy]
            : [
                 '<25>{#p/toriel}{#f/0}* Ah, evet, konusu açılmış iken...',
                 '<25>{#p/toriel}{#f/0}* Yakın zamanda bu mankenin içinde bir hayaletin saklandığını keşfettim.',
                 '<25>{#p/toriel}{#f/1}* Hakkında rahatsız olduğu bir şey varmış gibi görünüyordu, ama...',
                 '<25>{#p/toriel}{#f/0}* Ufak bir konuşmadan sonra onun sakinleşmesine yardımcı oldum.',
                 '<25>{#p/toriel}{#f/1}* Hmm... Acaba Lurksalot şimdi nerede?'
              ])
      ],
      w_coffin: [
         '<25>{#p/toriel}{#f/5}* ...',
         '<25>{#f/5}* Böyle zamanlarda saygı göstermemiz önemlidir.',
         '<25>{#f/10}* ... beni anlıyor musun?',
         '<25>{#f/9}* Bu bulmacalardan veya çatışmalardan daha önemli bir derstir.'
      ],
      w_danger: () =>
         SAVE.data.n.state_wastelands_froggit === 3
            ? [
                 '<25>{#p/toriel}{#f/1}* O odadaki terminalde bulunan bilmece...',
                 '<25>{#f/0}* Eski bir Dünya efsanesinde bulduğum bir şeye dayanıyordu.',
                 '<25>{#f/1}* İçerdiği şeyler arasında bir dizi karmaşık bulmaca vardı...',
                 '<25>{#f/0}* Bir de belirli bir aldatıcı hamur işi yer alıyordu.',
                 SAVE.data.b.w_state_riddleskip
                    ? '<25>{#f/5}* Bunu çözmeyi reddetmen çok yazık oldu.'
                    : '<25>{#f/0}* Bunu çözdüğünü görmek oldukça memnun ediciydi.'
              ]
            : [
                 '<25>{#p/toriel}{#f/1}* Outlands\'in gözetmeni olarak görev edindiğim bir şey...',
                 '<25>{#f/0}* Diğer canavarların sana saldırmasını engellemektir.',
                 '<25>{#f/0}* Bu konuda hem onlar hem de ben ortak bir anlayışa sahibiz.',
                 '<25>{#f/0}* İşte bu yüzden Froggit doğrudan ayrılmıştı.'
              ],
      w_zigzag: [
         '<25>{#p/toriel}{#f/1}* Bu odayı bu kadar uzun ve rüzgarlı yapma fikrim...',
         '<25>{#f/0}* ... düz bir odanın çok sıkıcı olacağını düşünmemdi.',
         '<25>{#f/1}* Sonuçta, kim tüm hayatı boyunca düz bir yolda yürümek ister ki?',
         '<25>{#f/0}* Biraz değişiklik oldukça hoş olacaktır.'
      ],
      w_froggit: [
         '<25>{#p/toriel}* Bu odadan itibaren etrafta daha fazla canavar bulunabilir.',
         '<25>{#f/0}* Burada sık sık \"takılmayı\" severler.\n* Hoş, öyle değil mi?',
         '<25>{#f/1}* Yakın zamana kadar sessiz bir yerdi burası, ta ki...',
         '<25>{#f/0}* Bir canavar diğerlerine nasıl flört edileceğini öğretene kadar.',
         '<25>{#f/0}* Bu yeni unsur toplumsal atmosferi büyük ölçüde değiştirdi.'
      ],
      w_candy: () => [
         SAVE.data.n.state_wastelands_candy < 4
            ? '<25>{#p/toriel}{#f/1}* Otomat henüz bozulmadı mı?'
            : '<25>{#p/toriel}{#f/1}* Ah canım, otomat yeniden mi bozuldu?',
         '<25>{#f/5}* Bu olay sayısını hatırlayamayacağım kadar çok kez yaşandı.',
         '<25>{#f/3}* Otomatın olumlu tarafı, güç tasarrufu sağlıyor olması...',
         '<25>{#f/0}* ... yani belki durumu o kadar da kötü değildir.'
      ],
      w_puzzle1: [
         '<25>{#p/toriel}{#f/1}* Bulmacayı tekrar deneme sürecini kolaylaştırmak için...',
         '<25>{#f/0}* Seni en başına geri döndürecek bir sistem kurdum.',
         '<25>{#f/5}* Bunu kurmamı sağlayan bilimci artık aramızda değil...',
         '<25>{#f/0}* Ama onun çıkardığı iş her geçen gün faydalı olmaya devam ediyor.'
      ],
      w_puzzle2: [
         '<25>{#p/toriel}{#f/1}* Ah, burada son derece özgün bir bulmaca mevcut.',
         '<25>{#f/0}* Ezberden çok sabrı sınayan bir tür.',
         '<25>{#f/1}* Çoğu zaman diğer insanlar bundan şikayetçiydi...',
         '<25>{#f/0}* Ama aralarından birisi sağladığı değeri takdir ediyordu.'
      ],
      w_puzzle3: [
         '<25>{#p/toriel}{#f/1}* Bu bulmacada işine yarayabilecek küçük bir ipucu...',
         '<25>{#f/0}* Sıra gösterilirken bile hareket etmeye başlayabiliyor olman.',
         '<25>{#f/5}* ... Sanırım bu noktada sana pek bir faydası olmayacak.',
         '<25>{#f/1}* Ama, eğer herhangi bir sebepten ötürü tekrar çözmen gerekir ise...',
         '<25>{#f/0}* Az önce verdiğim tavsiyeyi deneyebilirsin.'
      ],
      w_puzzle4: [
         '<25>{#p/toriel}{#f/1}* Dikkatimi çeken bir şey var ki, son zamanlarda...',
         '<25>{#f/0}* Yayından kalkmış çizgi roman serisinin eski baskıları satılıyor.',
         '<25>{#f/0}* Belki sıkıldıysan bir tane satın alabilirsin.',
         '<25>{#f/0}* Senin yaşındaki çocuklar bu tür şeylere oldukça düşkündür!'
      ],
      w_mouse: [
         '<25>{#p/toriel}{#f/1}* İlke gereği önemli bulduğum bir şey var ise...',
         '<25>{#f/0}* Bu, durup dinlenmeye yönelik bir odanın tahsis edilmesidir.',
         '<25>{#f/0}* Hayatımda bu tür molaların faydalı olduğunu sıkça görüyorum.',
         '<25>{#f/1}* Burada yaşayan Stærmayt kesinlikle aynı fikirde olacaktır...'
      ],
      w_blooky: () =>
         SAVE.data.b.killed_mettaton
            ? [
                 '<25>{#p/toriel}{#f/1}* Buraya sık sık gelen o hayalet, sebebi her ne ise...',
                 '<25>{#f/5}* Son zamanlarda her zamankinden daha kötü hissediyor kendini.',
                 '<25>{#f/1}* Nedenini sormaya çalıştım ama söylememekte ısrarlıydı...',
                 '<25>{#f/5}* ... O zamandan beri onu bir daha görmedim.'
              ]
            : !SAVE.data.b.a_state_hapstablook || SAVE.data.n.plot < 68
            ? [
                 '<25>{#p/toriel}{#f/0}* Önceden beni arayan o hayalet genellikle bu bölgede bulunuyor.',
                 ...(SAVE.data.b.napsta_performance
                    ? [ '<25>{#f/1}* Gösterdiği performansından sonra daha mutlu olacağını düşünmüştüm...' ]
                    : [ '<25>{#f/1}* Geçmişte onun ruhunu canlandırmaya çalıştım...' ]),
                 '<25>{#f/5}* Ancak sıkıntılarının çözümü o kadar kolay olmayabilir.',
                 '<25>{#f/1}* Keşke onu neyin üzmekte olduğunu bilseydim...'
              ]
            : [
                 '<25>{#p/toriel}{#f/1}* Buraya sık sık gelen o hayalet, sebebi her ne ise...',
                 '<25>{#f/0}* Son zamanlarda çok daha iyi hissediyor kendini.',
                 '<25>{#f/0}* Hatta bunu bana kendisi söylemek için evime bile geldi.',
                 '<25>{#f/1}* Görünüşe göre bu işte senin parmağın var...?',
                 '<25>{#f/0}* Peki öyleyse.\n* Seninle gurur duyuyorum çocuğum.'
              ],
      w_party: [
         '<25>{#p/toriel}{#f/0}* Aktivite odası.\n* Orada gösterilere ev sahipliği yapıyoruz.',
         '<25>{#f/0}* Drama, dans geceleri...\n* Ve en önemlisi, sanatlar.',
         '<25>{#f/0}* Diğerlerinin kendilerini ifade ettiklerini görmek iyidir.',
         '<25>{#f/1}* Bir kere tam o odada bir komedi gösterisine katılmıştım.',
         '<25>{#f/0}* Hayatımda hiç bu kadar çok gülmemiştim!'
      ],
      w_pacing: () => [
         SAVE.data.b.toriel_twinkly
            ? '<25>{#p/toriel}{#f/0}* Duydum ki birisi o konuşan yıldız ile \"arkadaş\" olmuş.'
            : '<25>{#p/toriel}{#f/0}* Duydum ki birisi bir konuşan yıldız ile \"arkadaş\" olmuş.',
         '<25>{#f/1}* Froggit\'lerden birisi, sanıyorum ki...?',
         "<25>{#f/1}* O canavarların güvenliği için endişeleniyorum demek...",
         '<25>{#f/5}* Çok hafif kalan bir ifade olurdu.'
      ],
      w_junction: [
         '<25>{#p/toriel}{#f/1}* Kesişme odası...',
         '<25>{#f/0}* Geçmişte, burada bir tür topluluk alanı planlamıştık.',
         '<25>{#f/0}* Outlands\'e gelen ziyaretçiler sıcak karşılanırlardı.',
         '<25>{#f/1}* Ama zamanla pek fazla bireyin gelmeyeceğini fark ettik...',
         '<25>{#f/0}* Ve böylece, tasarım bugün gördüğün haline getirildi.',
         '<25>{#f/5}* Biraz sıkıcı, ama sanıyorum ki her oda ihtişamlı olamaz...'
      ],
      w_annex: [
         '<25>{#p/toriel}* Buradan çok önemli bir taksi durağına ulaşılabilir.',
         '<25>{#f/1}* Sadece karakolun diğer alanlarına değil...',
         '<25>{#f/0}* Outlands\'in diğer alt bölümlerine de erişim mümkündür.',
         '<25>{#f/1}* Ancak, henüz küçük bir çocuk olmana bakılırsa...',
         '<25>{#f/5}* Sürücünün sana bu seçeneği sunması pek olası değildir.',
         '<25>{#f/0}* Oradaki dükkan ve işletmeler yetişkinlere yönelik.'
      ],
      w_wonder: () => [
         '<25>{#p/toriel}{#f/1}* Yaptığım alışverişten dönerken beni küçük bir mantar karşıladı...',
         SAVE.data.b.snail_pie
            ? '<25>{#f/0}* ... o salyangozlu turta için gerekli malzemeler ile dönüyordum.'
            : '<25>{#f/0}* ... o karamelli turta için gerekli malzemeler ile dönüyordum.',
         '<25>{#f/3}* İlginçtir ki, kapı girişinin yukarısında süzülüyordu...',
         '<25>{#f/0}* O odadaki yer çekimi zayıf olmalı.',
         '<25>{#f/1}* Belki taksinin varlığının bir etkisi vardır...?'
      ],
      w_courtyard: [
         '<25>{#p/toriel}{#f/0}* Ah.\n* Avlu.',
         '<25>{#f/1}* Senin gibi çocukların oynayacağı bir yer olma açısından...',
         '<25>{#f/5}* Biraz eksiklikleri var.',
         '<25>{#f/1}* Buraya gelen her bir insan ile bunu düzeltmeyi düşündüm...',
         '<25>{#f/5}* Ama onlar hep ben fırsat bulamadan buradan ayrıldılar.'
      ],
      w_alley1: [
         '<25>{#p/toriel}{#f/9}* ... sana ayrılman konusunda ders verdiğim oda.',
         '<25>{#f/5}* Düşündüm ki, eğer güç kalkanı hakkında konuşursam...',
         '<25>{#f/5}* Seni burada kalmaya ikna edebilirim.',
         '<25>{#f/1}* ... Diğer insanlara da aynısını söylediğimi hatırlıyorum, ama...',
         '<25>{#f/5}* Onlar için de ancak sende olduğu kadar etkili olmuştu.'
      ],
      w_alley2: [
         '<25>{#p/toriel}{#f/9}* ... seni bekleyen tehlikeler konusunda uyardığım oda.',
         '<25>{#f/5} Buna yönelik inançlarımın yanlış olduğu söylendi, ama...',
         '<25>{#f/5}* Bu riski almanın akıllıca olmadığını düşündüm.',
         '<25>{#f/9}* ... belki de bakış açımı gözden geçirme zamanım gelmiştir.'
      ],
      w_alley3: [
         '<25>{#p/toriel}{#f/9}* ... Burada sana karşı davranışımdan dolayı gerçekten pişmanım.',
         '<25>{#f/5}* Seni kalmaya zorlamaya çalışmam yanlıştı...',
         '<25>{#f/5}* Yalnızca kendi ahmakça arzularım doğrultusunda hareket ediyordum.',
         '<25>{#f/1}* Ama beni çoktan affettiğine eminim...',
         '<25>{#f/5}* Bunu hak edip etmediğime bakmaksızın...'
      ],
      w_alley4: () =>
         SAVE.data.b.w_state_fightroom
            ? [
                 '<32>{#s/phone}{#p/event}* Aranıyor...',
                 '<25>{#p/toriel}{#f/1}* O oda bizim için pek iyi duygular çağrıştırmasa da...',
                 '<25>{#f/0}* Hala Outlands\'deki en sevdiğim yerlerden biridir.',
                 '<25>{#f/1}* Burada zaman zaman ziyarete gelen biri var...',
                 '<25>{#f/6}* Belki de ondan zaten haberdarsındır.',
                 '<32>{#s/equip}{#p/event}* Klik...'
              ]
            : instance('main', 'toriButNotGarb') === void 0 // NO-TRANSLATE

            ? [
                 '<32>{#s/phone}{#p/event}* Aranıyor...',
                 '<25>{#p/toriel}{#f/1}* Bu kadar erken mi arıyorsun...?',
                 '<25>{#f/0}* ... Henüz eve bile dönmedim!',
                 '<25>{#f/0}* Lütfen, tekrar aramadan önce biraz bekle.',
                 '<32>{#s/equip}{#p/event}* Klik...'
              ]
            : [
                 '<32>{#w.stopThatGoat}{#s/phone}{#p/event}* Aranıyor...',
                 '<25>{#p/toriel}{#f/1}* Bu kadar erken mi arıyorsun...?',
                 '<25>{#f/0}* ... Henüz odadan bile çıkmadım!',
                 '<25>{#f/2}* Biraz nefes alacak zaman iyi olurdu!',
                 '<32>{#w.startThatGoat}{#s/equip}{#p/event}* Klik...'
              ],
      w_bridge: [
         '<25>{#p/toriel}{#f/1}* Karakolun geri kalanına giden köprü...',
         '<25>{#f/5}* Onu neredeyse yok ettiğimi düşünmek utanç verici.',
         '<25>{#f/0}* Elbette, taksi hala buralarda olurdu.',
         '<25>{#f/3}* Ama onun yeterince güvenilir olacağından şüpheliyim.',
         '<25>{#f/1}* Bu köprünün hala yerinde olduğuna sevinelim.'
      ],
      w_exit: () =>
         SAVE.data.n.plot < 16
            ? [
                 '<25>{#p/toriel}{#f/1}* Çocuğum, eğer Outlands\'i terk ediyorsan...',
                 '<25>{#f/0}* Bu durumda... Senden bir şeyi hatırlamanı istiyorum.',
                 '<25>{#f/1}* Ne olursa olsun, önü ne kadar zor görünürse görünsün...',
                 '<25>{#f/0}* Sana olan inancımı bilmeni istiyorum.',
                 '<25>{#f/0}* Doğru olan şeyi yapabileceğini biliyorum.',
                 '<25>{#f/1}* Bunu hatırla, tamam mı?'
              ]
            : SAVE.data.n.plot < 17.001
            ? [
                 '<25>{#p/toriel}{#f/1}* Outlands\'e bu kadar erken mi dönüyorsun...?',
                 '<25>{#f/0}* Yani.\n* Buna karşı olduğumu söyleyemem.',
                 '<25>{#f/1}* İstediğin zaman ayrılabilirsin, tabii ki...',
                 '<25>{#f/0}* Ama şu an için seni görmek güzel.'
              ]
            : [
                 '<25>{#p/toriel}{#f/2}* Ne kadar süredir orada duruyorsun!?',
                 '<25>{#f/1}* Bu kadar yolu sırf beni aramak için mi geri geldin?',
                 '<25>{#f/0}* ... seni şapşal çocuk.',
                 '<25>{#f/0}* Eğer aramak istersen, bu kadar geriye dönmeye gerek yok.'
              ],
      w_toriel_front: [
         '<25>{#p/toriel}{#f/1}* Bu evin başka bir evin yeniden yapımı olduğunu biliyor muydun?',
         '<25>{#f/1}* Geçmişte Hisar\'da yaşıyordum...',
         '<25>{#f/0}* Tam da buna benzeyen bir evin içinde.',
         '<25>{#f/5}* Zaman zaman aslında orada olmadığımı unutuyorum...'
      ],
      w_toriel_hallway: [
         '<25>{#p/toriel}{#f/0}* Koridor hakkında söylenecek çok fazla şey yok.',
         '<26>{#f/1}* Ama eğer istersen aynaya bir bakabilirsin...',
         '<25>{#f/0}* Öz değerlendirmenin güçlü olabileceğini duyuyorum.'
      ],
      w_toriel_asriel: [
         '<25>{#p/toriel}{#f/0}* Ah, bu senin odan!',
         '<25>{#f/5}* Senin... odan...',
         '<25>{#f/9}* ...',
         '<25>{#f/5}* Belki de artık öyle değildir.',
         '<25>{#f/1}* ...',
         '<25>{#f/1}* Aslında, bu kararı sana bırakıyorum...',
         '<25>{#f/0}* Hala dilediğin zaman burada dinlenebilirsin.'
      ],
      w_toriel_toriel: [
         '<25>{#p/toriel}{#f/0}* Demek odama denk geldin.',
         '<25>{#f/0}* Dilersen, kitaplığımdan bir kitap okuyabilirsin.',
         '<25>{#f/0}* Ama, lütfen, yerine geri koymayı unutma.',
         "<25>{#f/23}* Ve o çorap çekmecesini sakın açma!"
      ],
      w_toriel_living: () =>
         toriCheck()
            ? [ '<25>{#p/toriel}{#f/3}* Beni tam buradayken aramana gerek yok, ufaklık.' ]
            : [
                 '<25>{#p/toriel}{#f/1}* Salonu mu keşfediyoruz?',
                 '<25>{#f/0}* Söyle bakalım.\n* Henüz kitapların hepsini okudun mu?',
                 '<25>{#f/1}* Sana salyangoz bilgileri kitabını okumayı düşündüm...',
                 '<25>{#f/0}* Ama senin için biraz fazla tekrara düşebilir diye vazgeçtim.'
              ],
      w_toriel_kitchen: [
         '<25>{#p/toriel}{#f/1}* Mutfak...?',
         '<25>{#f/0}* Senin için buzdolabında bir çikolata bıraktım.',
         '<25>{#f/0}* Duyduğuma göre... insanların eski bir favorisiymiş.',
         '<25>{#f/1}* Umarım beğenirsin...'
      ],
      s_start: () =>
         SAVE.data.n.plot < 17.001
            ? [
                 '<25>{#p/toriel}{#f/0}* Eğer doğruysam, bir arkadaşım ileride olmalı.',
                 '<26>{#f/0}* Korkma, küçüğüm.',
                 '<25>{#f/1}* İlerlemeye devam et...'
              ]
            : [
                 '<25>{#p/toriel}{#f/1}* From what I recall, this long room...',
                 '<26>{#f/0}* ... would have been the basis for a town on the outskirts of Starton.',
                 '<25>{#f/0}* Of course, that never came to pass.',
                 '<25>{#f/2}* One town was more than enough!'
              ],
      s_sans: () =>
         SAVE.data.n.plot < 17.001
            ? [
                 '<25>{#p/toriel}{#f/0}* Eğer doğruysam, bir arkadaşım ileride olmalı.',
                 '<26>{#f/0}* Korkma, küçüğüm.',
                 '<25>{#f/1}* İlerlemeye devam et...'
              ]
            : [
                 '<25>{#p/toriel}{#f/1}* I presume by now you have heard of the \"gravometric inverter?\"',
                 '<26>{#f/0}* It is a device Sans has told me all about.',
                 '<25>{#f/1}* Apparently, there is another world up there...',
                 '<25>{#f/0}* A place where things do not always face the right way up.'
              ],
      s_crossroads: [
         '<25>{#p/toriel}{#f/1}* This old landing pad was once a bustling intersection...',
         '<25>{#f/1}* Supply ships coming and going...',
         '<25>{#f/1}* Ready to aid in whatever was being built next...',
         '<25>{#f/5}* It is a shame the outpost seems to have stopped expanding.',
         '<25>{#f/0}* For a while, building new areas defined our culture!'
      ],
      s_human: [
         "<25>{#p/toriel}* I heard Sans's brother wants to join the Royal Guard someday.",
         '<25>{#f/1}* Such an aspirational young skeleton...',
         '<25>{#f/0}* Despite my feelings about the guard, it is good for him to dream.',
         '<25>{#f/5}* I worry that too many have given up on their dreams lately...',
         '<25>{#f/0}* But not him!\n* That skeleton knows what is best for him.'
      ],
      s_papyrus: [
         '<25>{#p/toriel}* Sans told me all about the gadgets Papyrus added to his station.',
         '<25>{#f/1}* First, a handle, so he can \"swing\" into duty...',
         '<25>{#f/1}* A so-called \"sky wrench\" used to get a \"fix\" on the stars...',
         '<25>{#f/0}* And a screen attachment to keep track of his many responsibilities.',
         '<25>{#f/6}* With inventions like these, you would think he works at a lab.'
      ],
      s_doggo: [
         '<25>{#p/toriel}{#f/5}* Is the Royal Guard giving you too much trouble?',
         '<25>{#f/0}* Sans did say he would warn you of potential encounters.',
         '<25>{#f/1}* ...',
         '<25>{#f/1}* Perhaps I should be more worried, but...',
         '<25>{#f/0}* Something tells me you will be alright.',
         '<25>{#f/0}* I have faith in that skeleton to look out for you.'
      ],
      s_robot: [
         '<25>{#p/toriel}{#f/1}* Ah, what a lovely sound...',
         '<25>{#f/0}* I would recognize a builder bot anywhere.',
         '<25>{#f/5}* After the ban on AI programs, we had most of them disabled...',
         '<25>{#f/1}* But the two whose sentience did not corrupt them...',
         '<25>{#f/0}* Were allowed a more graceful retirement.',
         '<25>{#f/0}* It is nice to know that they have survived to this day.'
      ],
      s_maze: [
         "<25>{#p/toriel}* Sans has told me all about his brother's fondness for puzzles.",
         '<25>{#f/1}* I hear he has even created some of his own...?',
         '<25>{#f/0}* I am most curious about the \"wall of fire.\"',
         '<25>{#f/1}* Are the flames hot?\n* Or are they merely pleasantly warm?',
         '<25>{#f/5}* For your sake, I would hope it is the latter.'
      ],
      s_dogs: [
         '<25>{#p/toriel}{#f/1}* I hear the Royal Guard employs a pair of married dogs.',
         '<25>{#f/3}* To be married at the same time as being a royal guard...',
         '<25>{#f/4}* That relationship must have some \"interesting\" motivations.',
         '<25>{#f/6}* But what do I know.\n* As Sans would say, I am merely a \"goat!\"'
      ],
      s_lesser: [
         '<25>{#p/toriel}* I wonder what kind of food is sold in Starton these days.',
         '<25>{#f/1}* When I was last here, everyone loved to eat ghost fruit...',
         '<25>{#f/0}* A strange food which could be eaten both by ghosts and non-ghosts.',
         '<26>{#f/0}* Whatever the favorite\n  is now, I am sure I could never dream of it.'
      ],
      s_bros: [
         "<25>{#p/toriel}{#f/1}* Sans's fondness for spot-the-difference puzzles...",
         '<25>{#f/0}* Well, it has never really made sense to me.',
         '<25>{#f/1}* How could such a simple puzzle be appealing to him?',
         '<26>{#f/3}* ... more specifically...',
         '<25>{#f/1}* Where is the humor in such a puzzle?'
      ],
      s_spaghetti: [
         "<25>{#p/toriel}* Sans has often spoken of Papyrus's interest in spaghetti dishes.",
         '<25>{#f/6}* But why stop there?\n* Just imagine the PASTABILITIES...',
         '<25>{#f/8}* Rigatoni!\n* Fettuccine!\n* Acini di Pepe!',
         '<25>{#f/0}* Some variety could really help him go FARFALLE.',
         '<25>{#f/2}* ... in other words, go BIGOLI or go home!'
      ],
      s_puzzle1: [
         '<25>{#p/toriel}{#f/1}* Whatever the puzzles in Starton are like now, I am sure...',
         '<25>{#f/0}* They are nothing like the ones that were here when I left.',
         '<25>{#f/5}* A level of difficulty so unrealistic...',
         '<25>{#f/5}* It is a wonder anyone could solve them at all.'
      ],
      s_puzzle2: [
         '<25>{#p/toriel}{#f/1}* They say some puzzles have secret solutions...',
         '<25>{#f/0}* ... a statement I find utterly unbelievable!',
         '<25>{#f/0}* A secret solution would defeat the whole purpose of a puzzle.',
         '<25>{#f/1}* Puzzles, at least ones with realistic difficulty...',
         '<25>{#f/2}* Should be solved the intended way only!'
      ],
      s_jenga: [
         '<25>{#p/toriel}* To my knowledge, Dr. Alphys is the current royal scientist.',
         '<25>{#f/1}* She may never replace the experience of her predecessor, but...',
         '<25>{#f/0}* I am sure she is more than capable of finding her own path forward.',
         '<25>{#f/0}* This may surprise you, but I have a certain respect for scientists.',
         '<25>{#f/2}* Such brilliant minds!'
      ],
      s_pacing: [
         '<25>{#p/toriel}{#f/1}* You would be wise to steer clear of dubious salesfolk...',
         '<25>{#f/0}* For you never know what strings they may pull.',
         '<25>{#f/0}* Or what moon rocks may end up falling into your lap.',
         '<25>{#f/3}* It is a lesson I have learned the hard way, unfortunately...'
      ],
      s_puzzle3: [
         '<25>{#p/toriel}{#f/1}* The puzzle in this room is one of memorization, is it not?',
         '<25>{#f/1}* Sans mentioned that his brother often updates the pattern...',
         '<25>{#f/0}* ... to maintain a strong \"rotating password.\"',
         '<25>{#f/6}* How silly!',
         '<25>{#f/0}* In the Outlands, our memorization puzzles update on-demand.'
      ],
      s_greater: [
         '<25>{#p/toriel}{#f/1}* The old owner of that doghouse, Canis Maximus...',
         '<25>{#f/0}* ... retired from the guard a long while ago.',
         '<25>{#f/7}* Fortunately, its new owner is said to be a bundle of puppy energy!',
         '<25>{#f/0}* Clearly, it has learned well from such a wise master.'
      ],
      s_math: [
         '<25>{#p/toriel}{#f/1}* Please, can somebody explain \"dog justice?\"',
         '<25>{#f/0}* It is an odd phrase I continue to hear every so often.',
         '<25>{#f/5}* I do know of one little puppy that visits the Outlands sometimes...',
         '<25>{#f/0}* Perhaps that is who is deserving of justice.'
      ],
      s_bridge: [
         '<25>{#p/toriel}{#f/1}* When this bridge was first constructed...',
         "<25>{#f/0}* Its precarious nature prompted an upgrade to the outpost's systems.",
         '<25>{#f/0}* In short time, the aptly-named \"gravity guardrails\" were added.',
         '<25>{#f/0}* These are what prevent you from falling off the platforms.'
      ],
      s_town1: [
         '<25>{#p/toriel}{#f/0}* Ah...\n* The town of Starton.',
         '<25>{#f/1}* I have heard much about a \"Grillby\'s\" there...',
         '<25>{#f/0}* ... and its diverse array of patrons both new and old.',
         '<25>{#f/0}* Sans often goes there to eat, you see.',
         '<25>{#f/7}* I hear the bartender is quite \"hot.\"'
      ],
      s_taxi: [
         '<25>{#p/toriel}{#f/1}* A taxi stop near town?',
         '<25>{#f/1}* ... hmm...',
         '<25>{#f/0}* I wonder if it is any different from the one in the Outlands.',
         '<25>{#f/1}* Of course, I would have no way of knowing until I saw it...',
         '<25>{#f/0}* Which I have no way of doing without a fancy telescope.',
         '<25>{#f/0}* I wonder where I could find one of those.'
      ],
      s_town2: [
         '<25>{#p/toriel}{#f/1}* Napstablook recently told me they opened a shop...',
         '<25>{#f/5}* ... on the \"south side\" of town.',
         '<25>{#f/1}* What could this mean?',
         '<25>{#f/0}* The town I remember organizing was a large, unified square.',
         '<25>{#f/1}* Perhaps there was a split at some point?',
         '<25>{#f/5}* That would be a shame, considering the original vision...'
      ],
      s_battle: [
         '<25>{#p/toriel}{#f/1}* The thing Sans seemed most eager to warn me about...',
         '<25>{#f/0}* Was his brother\'s so- called \"special attack.\"',
         '<25>{#f/1}* If Papyrus chooses to spar with you, you must avoid it at all costs.',
         '<25>{#f/2}* I repeat, avoid the special attack!\n* At all costs!',
         '<25>{#f/0}* That is all I have to say on this matter.'
      ],
      s_exit: [
         '<25>{#p/toriel}{#f/1}* If you ever decide to leave Starton, you must understand...',
         '<25>{#f/5}* My phone is old, and can only reach certain rooms in the factory.',
         '<25>{#f/9}* It would be difficult to call me until you find your way out.',
         '<25>{#f/1}* Forgive me.\n* I just thought that I should let you know.'
      ],
      f_entrance: [
         '<25>{#p/toriel}{#f/7}* So you found a place in the factory with good reception...?',
         '<25>{#f/1}* ... that must mean you are somewhere unenclosed...',
         '<25>{#f/0}* Which also implies the nearby presence of synth-bushes.',
         '<25>{#f/3}* Those things are terrible to get stuck in...',
         '<25>{#f/4}* Getting you all itchy and scratchy...',
         '<25>{#f/0}* Fortunately, I know you are smart enough not to run into them.'
      ],
      f_bird: () =>
         SAVE.data.n.plot !== 47.2 && SAVE.data.n.plot > 42 && SAVE.data.s.state_foundry_deathroom !== 'f_bird' // NO-TRANSLATE

            ? [
                 '<25>{#p/toriel}{#f/0}* There truly is nothing like the chirp of that fearless little bird.',
                 '<25>{#f/1}* Even when it still lived within a bucket of water...',
                 '<25>{#f/1}* It would fly its mighty little wings...',
                 '<25>{#f/1}* Taking us places...',
                 '<25>{#f/0}* I used its services to carry groceries often.',
                 '<25>{#f/5}* ... back when we as a species all lived in that old factory.'
              ]
            : [
                 '<25>{#p/toriel}{#f/5}* Things sound awfully silent where you are...',
                 '<25>{#f/5}* Almost like there is something missing.',
                 '<25>{#f/5}* Something important...',
                 '<25>{#f/0}* Well, no matter.\n* My imagination does run wild sometimes.',
                 '<25>{#f/1}* ...',
                 '<25>{#f/1}* Chirp, chirp, chirp, chirp, chirp...'
              ],
      f_taxi: [
         "<25>{#p/toriel}{#f/1}* So you found the factory's taxi stop...?",
         '<25>{#f/0}* Perhaps you could use it to escape that Royal Guard captain.',
         '<25>{#f/1}* A visitor here once spoke of her obsession with spears...',
         '<25>{#f/0}* How odd.\n* The captain I knew was into sabers.'
      ],
      f_battle: [
         '<25>{#p/toriel}{#f/0}* Ah, there you are.',
         "<25>{#f/0}* You're at the edge of the factory there.",
         '<26>{#f/1}* From this point forward, I do not know what lies ahead of you...',
         '<25>{#f/5}* Before I left, there was only an elevator to the Citadel.',
         '<25>{#f/1}* Now, however, exists the area called \"Aerialis...\"',
         '<25>{#f/23}* ... I wonder who came up with THAT name.'
      ],
      f_exit: toriel_aerialis,
      a_start: toriel_aerialis,
      a_path1: toriel_aerialis,
      a_path2: toriel_aerialis,
      a_path3: toriel_aerialis,
      a_rg1: toriel_aerialis,
      a_path4: toriel_aerialis,
      a_barricade1: toriel_aerialis,
      a_puzzle1: toriel_aerialis,
      a_mettaton1: toriel_aerialis,
      a_elevator1: toriel_aerialis,
      a_elevator2: toriel_aerialis,
      a_sans: toriel_aerialis,
      a_pacing: toriel_aerialis,
      a_prepuzzle: toriel_aerialis,
      a_puzzle2: toriel_aerialis,
      a_mettaton2: toriel_aerialis,
      a_rg2: toriel_aerialis,
      a_barricade2: toriel_aerialis,
      a_split: toriel_aerialis,
      a_offshoot1: toriel_aerialis,
      a_elevator3: toriel_aerialis,
      a_elevator4: toriel_aerialis,
      a_auditorium: toriel_aerialis,
      a_aftershow: toriel_aerialis,
      a_hub1: toriel_aerialis,
      a_hub2: toriel_aerialis,
      a_lookout: toriel_aerialis,
      a_hub3: toriel_aerialis,
      a_plaza: toriel_aerialis,
      a_elevator5: toriel_aerialis,
      a_hub4: toriel_aerialis,
      a_sleeping1: toriel_aerialis,
      a_hub5: toriel_aerialis
   },
   c_call_toriel_early: () =>
      game.room === 'w_bridge' || game.room.startsWith('w_alley') // NO-TRANSLATE

         ? [ '<25>{#p/toriel}{#f/3}* ...', '<25>{#f/2}* Come back to the house this instant!' ]
         : [
              3 <= SAVE.data.n.cell_insult
                 ? '<25>{#p/toriel}{#f/23}* Are you not exhausted after how you behaved towards me?'
                 : SAVE.data.n.state_wastelands_napstablook === 5
                 ? '<25>{#p/toriel}{#f/1}* Are you not exhausted after waiting so long?'
                 : '<25>{#p/toriel}{#f/1}* Are you not exhausted after all you have been through?',
              3 <= SAVE.data.n.cell_insult
                 ? game.room.startsWith('w_toriel') // NO-TRANSLATE

                    ? '<25>{#f/0}* Perhaps you should see the bed I made for you in the guest room.'
                    : '<25>{#f/0}* Perhaps you should see the bed I made for you at the house.'
                 : game.room.startsWith('w_toriel') // NO-TRANSLATE

                 ? '<25>{#f/0}* Come to the hallway, and I will show you something.'
                 : '<25>{#f/0}* Come to the house, and I will show you something.'
           ],
   c_call_toriel_late: () =>
      SAVE.data.n.plot === 8.1
         ? [ '<32>{#p/human}* (But the line was busy.)' ]
         : game.room === 'w_bridge' || game.room.startsWith('w_alley') // NO-TRANSLATE

         ? [ '<25>{#p/toriel}{#f/3}* ...', '<25>{#f/2}* Come back to the house this instant!' ]
         : [
              '<25>{#p/toriel}{#f/1}* There is no need to call me over the phone, my child.',
              3 <= SAVE.data.n.cell_insult
                 ? '<26>{#f/23}* We already know what that tends to result in.'
                 : game.room === 'w_toriel_living' // NO-TRANSLATE

                 ? toriCheck()
                    ? '<25>{#f/0}* After all, I am here in the room with you.'
                    : '<25>{#f/0}* I will be done in just a moment.'
                 : game.room.startsWith('w_toriel') // NO-TRANSLATE

                 ? toriCheck()
                    ? '<25>{#f/0}* If you want to see me, you can come to the living room.'
                    : '<25>{#f/0}* If you want to see me, you can wait in the living room.'
                 : '<25>{#f/0}* If you want to see me, you can come to the house.'
           ],
   c_call_asriel: () =>
      [
         [
            "<25>{#p/asriel2}{#f/3}* Just so you know, I'm not picking that up.",
            '<25>{#p/asriel2}{#f/4}* We have better things to do.'
         ],
         [ '<25>{#p/asriel2}{#f/4}* ...' ],
         [ '<25>{#p/asriel2}{#f/4}* ... seriously?' ],
         [ '<25>{#p/asriel2}{#f/3}* You must be really, REALLY bored.' ],
         []
      ][Math.min(SAVE.flag.n.ga_asrielCall++, 4)],
   s_save_outlands: {
      w_courtyard: {
         name: 'Outlands - Avlu',
         text: () =>
            SAVE.data.n.plot > 16
               ? [
                    6 <= world.population
                       ? '<32>{#p/human}* (Ziyaret ederken bile, bu küçük ev içini azimle dolduruyor.)'
                       : '<32>{#p/human}* (Ziyaret ederken bile, bu ev içini azimle dolduruyor.)'
                 ]
               : 6 <= world.population
               ? [ '<32>{#p/human}* (Bu küçük şirin ev içini azimle dolduruyor.)' ]
               : [ '<32>{#p/human}* (Metalik duvarların ortasındaki bir ev içini azimle dolduruyor.)' ]
      },
      w_entrance: {
         name: 'Outlands - Giriş',
         text: () =>
            world.runaway
               ? [
                    '<32>{#p/human}* (Endüstriyel Outlands sessizliğe bürünüyor ve içini azimle dolduruyor.)',
                    '<32>{#p/human}* (CANIN tamamen yenilendi.)'
                 ]
               : SAVE.data.n.plot < 48
               ? [
                    '<32>{#p/human}* (Endüstriyel Outlands önünde uzanıyor ve içini azimle dolduruyor.)',
                    '<32>{#p/human}* (CANIN tamamen yenilendi.)'
                 ]
               : [
                    '<32>{#p/human}* (Uzun bir aradan sonra, her şeyin başladığı yere dönmek...)',
                    '<32>{#p/human}* (işte bu içini azimle dolduruyor.)',
                    '<32>{#p/human}* (CANIN tamamen yenilendi.)'
                 ]
      },
      w_froggit: {
         name: 'Outlands - Dinlenme Yeri',
         text: () =>
            SAVE.data.n.state_wastelands_toriel === 2 || world.runaway || roomKills().w_froggit > 0
               ? SAVE.data.n.plot < 8.1
                  ? [
                       '<32>{#p/human}* (Hava pis kokmaya başladı.)\n* (Bir şekilde, bu içini azimle dolduruyor.)',
                       '<32>{#p/human}* (CANIN tamamen yenilendi.)'
                    ]
                  : [
                       '<32>{#p/human}* (Hava tamamen kurudu.)\n* (Bilakis, bu içini azimle dolduruyor.)',
                       '<32>{#p/human}* (CANIN tamamen yenilendi.)'
                    ]
               : SAVE.data.b.svr
               ? [
                    '<32>{#p/human}* (Bu bölge boşaltıldı, ancak havası temiz duruyor.)',
                    '<32>{#p/human}* (Bu da tabi ki içini azimle dolduruyor.)',
                    '<32>{#p/human}* (CANIN tamamen yenilendi.)'
                 ]
               : [
                    '<32>{#p/human}* (Tuhaf ve muhteşem yaratıkları görmek içini azimle dolduruyor.)',
                    '<32>{#p/human}* (CANIN tamamen yenilendi.)'
                 ]
      },
      w_mouse: {
         name: 'Outlands - Stærmayt Deliği',
         text: () =>
            world.population > 5 && !SAVE.data.b.svr && !world.runaway
               ? [
                    '<32>{#p/human}* (Stærmayt\'ın bir gün ortaya çıkacağını bilmek...)',
                    '<32>{#p/human}* (Bunu düşünmek içini æzimle dolduruyor.)'
                 ]
               : [
                    '<32>{#p/human}* (Stærmayt tekrar ortaya çıkmasa bile...)',
                    '<32>{#p/human}* (Bu durum içini æzimle dolduruyor.)'
                 ]
      },
      w_start: {
         name: 'Çarpışma Alanı',
         text: []
      }
   }
};


// END-TRANSLATE
