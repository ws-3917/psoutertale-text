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
           '<25>{#p/toriel}{#f/1}* Aeralis\'te bir çeşit sıvı olduğunu duydum...',
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
              '<25>{#p/toriel}{#f/0}* Televizyon galanın lafı hızlıca yayılmış, yavrum!',
              '<25>{#f/0}* Tabi, ben göremedim, çünkü benim bir televizyonum yok.',
              '<25>{#f/1}* Duyduğumda, fakat, Şaşırmıştım doğrusu...',
              SAVE.data.n.state_aerialis_talentfails === 0
                 ? '<25>{#f/2}* Nasıl HİÇ hata yapmadın?'
                 : '<25>{#f/6}* Bu kadar \"muhteşem\" hareketlerin olduğunu bilmiyordum.'
           ]
      : SAVE.data.n.plot < 56
      ? [
           '<25>{#p/toriel}{#f/1}* Hmm...\n* Aeralis\'teki kraliyet muhafızları...',
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
              : '<25>{#f/2}* Ve bir \"tek kullanımlık taşınabilir jet\"i tek başına uçurmuşsun!',
           '<25>{#f/3}* ... sen...',
           '<25>{#f/4}* Hayatınızı tehlikeye atmaya mı ÇALIŞIYORDUN?'
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
           '<25>{#p/toriel}{#f/1}* Hmm...\n* Aeralis\'teki kraliyet muhafızları...',
           '<25>{#f/0}* Pozisyonlarına yeni terfi ettiklerini duydum.',
           '<25>{#f/1}* Ayrıca silah konusunda oldukça seçici olduklarını da duydum...',
           '<25>{#f/5}* Sunulan daha iyi seçeneklere rağmen bunları yükseltmeyi reddiyorlarmış.',
           '<25>{#f/0}* Silahlarını yükseltmelerini istediğimden değil de.',
           '<25>{#f/2}* Zaten senin için yeterince endişeleniyorum!'
        ]
      : SAVE.data.n.plot < 65
      ? SAVE.data.b.a_state_hapstablook
         ? [
              '<25>{#p/toriel}{#f/1}* Bir hayalet, Lurksalot, bazı aile işlerinden bahsetti.',
              '<25>{#f/5}* Görünüşe göre bir süredir akıllarındaymış.',
              '<25>{#f/0}* Neyse ki bunun yakında çözüleceğini söyledi.',
              '<25>{#f/1}* Senin yardımınla hem de, dimi?',
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
            '<25>{#f/13}* Hem de, RUHUM tekrar içimdeyken...',
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
            '<25>{#f/15}* ... in the past now.'
         ],
         e2: [
            "<25>{#p/asriel1}{#f/13}* I still can't believe they waited all that time just to see me...",
            '<25>{#f/23}* İnatçı aptal.',
            '<25>{#f/17}* ... is what I would have said, if I was still a talking star.',
            "<25>{#f/13}* But... I don't really think they're an idiot."
         ],
         e3: [
            "<25>{#p/asriel1}{#f/13}* $(name)'s not stupid.\n* And I...",
            '<25>{#f/13}* I agreed with a lot of what they said about themselves...',
            '<25>{#f/15}* About them not being the kind of friend I wish I had...',
            "<25>{#f/7}* ... but it doesn't mean I wanted them gone!"
         ],
         e4: [
            "<25>{#p/asriel1}{#f/13}* It's not like $(name) has to go away...",
            "<25>{#f/17}* If they wanted to, they could stay with us.\n* I'd like them to.",
            "<25>{#f/15}* But I'd understand if they wanted to go.",
            '<25>{#f/16}* They \"won\" their game.\n* They shouldn\'t want to \"play\" with me anymore.'
         ],
         e5: [
            "<25>{#p/asriel1}{#f/13}* ... $(name)...\n* If you're still there, listening...",
            '<25>{#f/15}* I want you to know that I love you.',
            '<25>{#f/23}* You might not have been the greatest person...',
            '<25>{#f/22}* But, deep down, you still cared about me.'
         ],
         e6: [
            '<25>{#p/asriel1}{#f/23}* Ha...',
            '<25>{#f/22}* I probably seem like a crazy person right now.',
            '<25>{#f/15}* Obsessing over someone I should have moved on from already...',
            '<26>{#f/17}* ... I guess $(name) and I really are just a \n  pair of stubborn idiots.'
         ],
         e7: [
            '<25>{#p/asriel1}{#f/13}* One time, $(name) and I were fighting over a bed...',
            "<25>{#f/10}* 'Cause, both of us wanted the one with the nightstand next to it.",
            '<26>{#f/15}* We were both pushing each other off the side, trying to make room...',
            '<25>{#f/4}* All that fighting got us so tired, that we fell asleep.',
            '<25>{#f/13}* But when we woke up...',
            '<25>{#f/17}* We were lying right next to each other.',
            "<25>{#f/13}* I tried to get up, but... they didn't want to let go.",
            '<26>{#f/15}* They just kept saying...',
            '<25>{#f/15}* \"... warm...\"',
            '<25>{#f/15}* \"... fluffy...\"',
            '<25>{#f/20}* I would have complained about it, but...',
            "<25>{#f/17}* ... at that point, I was just happy we weren't fighting."
         ],
         e8: [
            '<25>{#p/asriel1}{#f/13}* This other time, $(name) and I were making dinner for Mom and Dad.',
            '<25>{#f/15}* They kept wanting to make it more spicy...',
            '<25>{#f/3}* To be honest, if they insisted on that now, I would not complain.',
            '<25>{#f/20}* I could go for something spicy right about now.',
            '<25>{#f/13}* But, back then, I was more into sweets.\n* Most monsters are.',
            '<25>{#f/15}* We ended up playing tug-of-war with the mixing bowl, and...',
            '<25>{#f/20}* You can imagine how that turned out.',
            '<25>{#f/17}* Mom made us clean up the mess, of course.',
            '<25>{#f/13}* Then, Dad took us out to eat, and we both got what we wanted.'
         ],
         e9: [
            "<25>{#p/asriel1}{#f/15}* $(name) and I...\n* It's like we couldn't agree on anything...",
            '<25>{#f/20}* Besides spending time together, that is.',
            '<26>{#f/17}* Despite our differences, $(name) and I really were inseparable.',
            "<25>{#f/13}* Even death itself couldn't keep us apart forever."
         ],
         e10: [
            "<25>{#p/asriel1}{#f/17}* ... do you think they're still around, Frisk?",
            '<25>{#f/17}* For all you know, they could be watching us right now.',
            "<25>{#f/23}* Wouldn't that be something.",
            "<25>{#f/22}* But it's impossible to know for sure."
         ],
         e11: [
            "<25>{#p/asriel1}{#f/17}* Golly.\n* For someone who'll be staying with you...",
            "<25>{#f/20}* I sure am making it sound like I'd rather be with $(name).",
            "<25>{#f/13}* But... it's not like that at all.",
            "<25>{#f/17}* I just can't help but reminisce about someone I used to know."
         ],
         e12: () => [
            '<25>{#p/asriel1}{#f/17}* Frisk...\n* I want you to know.',
            '<25>{#f/13}* Thanks to you...',
            '<25>{#f/23}* I feel like I have a future again.',
            '<25>{#f/22}* ...',
            ...(!SAVE.flag.b.pacifist_marker_forgive
               ? [ "<25>{#f/22}* Even though you couldn't forgive me for what I'd done..." ]
               : SAVE.flag.n.killed_sans > 0
               ? [ '<25>{#f/22}* Even though I wanted you to do all those terrible things...' ]
               : [ '<25>{#f/22}* Even though I tortured you, and threatened everyone you love...' ]),
            "<25>{#f/13}* You're still willing to help me move past it all.",
            '<25>{#f/23}* ... it means a lot.',
            '<25>{#f/22}* ...',
            '<25>{#f/13}* Mom, Dad...',
            '<25>{#f/13}* Sans, Papyrus, Undyne, Alphys...',
            "<25>{#f/15}* Everyone I've killed in past realities...",
            "<25>{#f/16}* ... it's going to be difficult for me to face them.",
            '<25>{#f/13}* ...',
            "<25>{#f/17}* But I'll try.",
            "<25>{#f/23}* I'll try to be a better person.",
            '<25>{#f/22}* And, If I ever screw up...',
            "<25>{#f/13}* ... I know you'll be there to help me pick up the pieces."
         ],
         e13: [
            '<25>{#p/asriel1}{#f/17}* Ha... $(name).',
            "<25>{#f/23}* I won't let you down, okay?",
            "<25>{#f/22}* I'll make the most out of this chance you've given me.",
            "<25>{#f/17}* I'll make it count."
         ]
      },
      evac: [ '<32>{#p/human}* (You feel the nearby monster presence dwindling.)' ],
      stargum1: () =>
         SAVE.data.b.svr
            ? [
                 '<32>{#p/human}* (You saw a piece of gum taped to the comic strip...)',
                 choicer.create('* (Chew the gum?)', 'Evet', 'Hayır')
              ]
            : [
                 '<32>{#p/basic}* There was a piece of gum taped to the comic strip.',
                 choicer.create('* (Chew the gum?)', 'Evet', 'Hayır')
              ],
      stargum2: [ '<32>{#p/human}* (You decide not to chew.)' ],
      stargum3: [ '<32>{#p/human}* (You recovered $(x) HP.)' ],
      stargum4: [ '<32>{#p/human}* (HP fully restored.)' ],
      fireplace1: () =>
         SAVE.data.b.svr
            ? [
                 '<32>{#p/human}* (You feel the inviting warmth of the fireplace...)',
                 choicer.create('* (Crawl inside?)', 'Evet', 'Hayır')
              ]
            : [
                 SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                    ? '<32>{#p/basic}* An ordinary fireplace.'
                    : "<32>{#p/basic}* Toriel's fireplace.\n* It's not too hot, just pleasantly warm.",
                 ...(world.darker
                    ? []
                    : [ '<32>* You could probably crawl in.', choicer.create('* (Crawl inside?)', 'Evet', 'Hayır') ])
              ],
      fireplace2a: [ '<32>{#p/human}* (You chose not to crawl in.)' ],
      fireplace2b: () => [
         '<32>{#p/human}* (You crawl into the fireplace and let its warmth engulf you.)',
         '<32>{#p/human}* (You are very comfortable.)',
         ...(SAVE.data.b.svr
            ? asrielinter.fireplace2b++ < 1
               ? [ "<25>{#p/asriel1}{#f/13}* I'll just, uh, wait for you to get out." ]
               : []
            : world.goatbro && SAVE.flag.n.ga_asrielFireplace++ < 1
            ? [ "<25>{#p/asriel2}{#f/15}* I'll just, uh, wait for you to get out..." ]
            : [])
      ],
      fireplace2c: [ "<25>{#p/toriel}{#f/1}{#npc/a}* Orada çok uzun süre kalma..." ],
      fireplace2d: [ '<32>{#p/basic}* ...', '<32>* This is fine.' ],
      noticereturn: [ '<25>{#p/asriel2}{#f/10}* Something you missed back here?' ],
      noticestart: [
         '<25>{#p/asriel2}{#f/3}* Ah, the place where it all began.',
         "<25>{#p/asriel2}{#f/4}* We've certainly come along since then, haven't we, $(name)?"
      ],
      noticedummy: [ '<25>{#p/asriel2}{#f/3}* ...', "<25>{#p/asriel2}{#f/10}* Wasn't there a dummy here before...?" ],
      afrog: {
         a: [
            '<32>{#p/basic}{#n1}* Just between you and me...',
            '<32>* I saw that goat lady come through here just a little while ago.',
            '<32>* She had groceries, so I asked her what they were for, and...',
            "<32>* Well, you're in for a treat."
         ],
         b: () =>
            SAVE.data.n.plot === 72
               ? [
                    '<32>{#p/basic}{#n1}* Just between you and me...',
                    '<32>* I saw that goat lady come through here earlier.',
                    '<32>* She said it was time to \"confront her fears.\"',
                    "<32>* Well, whatever she did clearly led to something!\n* We're all free now!"
                 ]
               : SAVE.data.n.plot === 71.2
               ? [
                    '<32>{#p/basic}{#n1}* Did you see her?\n* She just came through here right now!',
                    '<32>* She said it was time to \"confront her fears.\"',
                    '<32>* I wonder what she could have meant...?\n* She seemed determined.'
                 ]
               : SAVE.data.b.w_state_lateleave
               ? [
                    '<32>{#p/basic}{#n1}* Just between you and me...',
                    '<32>* I saw that goat lady take the taxi to the supermarket earlier.',
                    "<32>* She said she was going off to buy milk, but she still hasn't come back...",
                    "<32>* I hope she's alright."
                 ]
               : [
                    '<32>{#p/basic}{#n1}* Just between you and me...',
                    "<32>* Sometimes, when I'm alone, I like to ride the taxi to the marketplace.",
                    "<32>* It's a quaint little shop, but there's loads of stuff to buy.",
                    "<32>* Maybe I'll take you there sometime... you'd adore it!"
                 ],
         c: () =>
            SAVE.data.n.plot === 72
               ? [
                    '<32>{#p/basic}{#n1}* Just between you and me...',
                    "<32>* I'm not a fan of how you beat us all up at first.",
                    '<32>* We were all so scared and confused...',
                    '<32>* ... at least you did something good in the end.'
                 ]
               : [
                    '<32>{#p/basic}{#n1}* Just between you and me...',
                    "<32>* The people you've been beating up aren't happy about it.",
                    "<32>* Just be glad I'm off-duty...\n* 'Cause otherwise...",
                    "<32>* I'd have your head."
                 ],
         d: [ '<32>{#p/basic}{#n1}* No... no!', '<32>* G-get away from me!' ]
      },
      asriel0: [
         "<25>{#p/asriel2}{#f/5}* ... but that's okay, I know you'll be there on time!",
         "<25>{#p/asriel2}{#f/1}* You wouldn't want to let me down, would you?"
      ],
      asriel1: () =>
         [
            [
               "<25>{#p/asriel2}{#f/2}* Sorry about that, I had to use Toriel's phone to call someone.",
               "<25>{#p/asriel2}{#f/1}* Don't worry...\n* You'll find out why soon enough.",
               "<25>{#p/asriel2}{#f/2}* ... hee hee hee.\n* I'll be waiting for you up ahead."
            ],
            [ "<25>{#p/asriel2}{#f/4}* I'll be waiting for you up ahead." ],
            [ '<25>{#p/asriel2}{#f/3}* ...' ]
         ][Math.min(SAVE.flag.n.ga_asrielNegative1++, 1)],
      asriel2: () => [
         '<25>{#p/asriel2}{#f/1}* Ready, $(name)?',
         "<25>{#f/2}* 'Cause once we move forward, there's no turning back.",
         choicer.create('* (Follow Him?)', 'Evet', 'Hayır')
      ],
      asriel2b: () => [ '<25>{#p/asriel2}{#f/1}* Ready?', choicer.create('* (Follow Him?)', 'Evet', 'Hayır') ],
      asriel3: [ '<25>{#p/asriel2}{#f/2}* Okay...', "<25>{#f/1}* Let's do this." ],
      asriel4: [ "<25>{#p/asriel2}{#f/4}* I'll be waiting, then." ],
      asrielDiary: [
         [
            '<32>{#p/human}* (You turn to the first page... you can barely make out the words.)',
            '<32>{#p/asriel1}{#v/2}* \"i am starting a dairy Cuz mommy said it wood be fun.\"',
            '<32>* \"today i lerned how to put seeds in daddys garden\"',
            '<32>* \"he says they will grow up soon But it wil take a long tiem.\"',
            '<32>* \"mommy is gona make a snail pie tonite And im exsited\"',
            '<32>* \"other then that im having a good day.\"'
         ],
         [
            '<32>{#p/human}* (You turn to the second page...)',
            '<32>{#p/asriel1}{#v/2}* \"azzys dairy, k-504\"',
            '<32>* \"mommy said i shood rite down the date So folks can no when i rote it.\"',
            '<32>* \"my starling flower stil hasnt grown yet but daddy promises it wil be soon\"',
            '<32>* \"i wish there was a window on my room but daddy said there is pluming here.\"',
            '<32>* \"they said they wood put a window in the front room tho\"',
            '<32>* \"i am having a nice day today as wel.\"'
         ],
         [
            '<32>{#p/human}* (You turn to the third page... seems a couple years went by.)',
            '<32>{#p/asriel1}{#v/2}* \"Azzys Diary, K-506.03.\"',
            '<32>* \"My old diary was in a box of toys And i wanted to put more in it.\"',
            '<32>* \"Looks like I only rote the first part of The date last time.\"',
            '<32>* \"By the way the Starling flower I planted before grew up.\"',
            '<32>* \"But I got in a fite with a frend The other day and we havent talked since that.\"',
            '<32>* \"Im worryed about them... i hope theyre not still mad.\"'
         ],
         [
            '<32>{#p/human}* (You turn to the fourth page...)',
            '<32>{#p/asriel1}{#v/2}* \"Azzys Diary, K-506.03\"',
            '<32>* \"i talked with my frend, they say theyre not upset anymore, so thats good\"',
            '<32>* \"Mommy and I were watching the sky out side And we saw a shooting star.\"',
            '<32>* \"She said to make a wish... I wished that one day a human wood come down.\"',
            '<32>* \"Mommy and Daddy tell so many storys about them...\"',
            '<32>* \"They cant all be bad rite?\"'
         ],
         [
            '<32>{#p/human}* (You turn to the fifth page...)',
            '<32>{#p/asriel1}{#v/2}* \"Azzys Diary, K-506.03\"',
            '<32>* \"Not alot to say today.\"',
            '<32>* \"Maybe this diary idea is silly.\"',
            '<32>* \"Mom saw me riting in it the other day and said she was proud of me.\"',
            '<32>* \"Is it realy that importint?\"'
         ],
         [
            '<32>{#p/human}* (You turn to the sixth page... seems like a few more years went by.)',
            '<32>{#p/asriel1}{#v/1}* \"Azzy\'s Diary, K-510.08\"',
            '<32>* \"Seems I cant write in this thing for too long at once.\"',
            '<32>* \"But today I saw the book again and chose to write some more in it.\"',
            '<32>* \"The past few years have been good, I went to school and learned lots of things.\"',
            '<32>* \"Like how to add numbers.\"\n* \"And how to use a computer.\"',
            '<32>* \"Mom said Im too young to make an online acount tho.\"',
            '<32>* \"Maybe one day when Im older I can have one.\"'
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
         "<32>{#p/basic}* This ghost keeps saying 'z' out loud repeatedly, pretending to sleep.",
         choicer.create('* (Try to walk through it?)', 'Evet', 'Hayır')
      ],
      blooky2: () => [
         '<32>{#p/basic}* The ghost is still blocking the way.',
         choicer.create('* (Try to walk through it?)', 'Evet', 'Hayır')
      ],
      blooky3: [
         '<32>{#p/napstablook}* i usually visit this place to get some peace and quiet...',
         '<32>* but today i met someone nice...',
         "<32>* well, i'll get out of your way now",
         '<32>* cya...'
      ],
      blooky4: [
         '<32>{#p/napstablook}* so um...\n* you really like me, huh',
         '<32>* heh... thank you...',
         '<32>* and, uh... sorry i got in your way before...',
         "<32>* i'll go somewhere else now",
         "<32>* but... don't worry...",
         "<32>* you'll see me again later...",
         '<32>* if you want to...',
         '<32>* well, cya...'
      ],
      blooky5: [
         '<32>{#p/napstablook}* so um... you really despise me, huh',
         "<32>* that's... nice...",
         "<32>* well, i'll be on my way now",
         '<32>* bye...'
      ],
      blooky6: [
         '<32>{#p/napstablook}* so um... that happened...',
         '<32>* ...',
         '<32>* uh... i gotta go now',
         '<32>* cya...'
      ],
      blooky7: [
         "<32>{#p/napstablook}* you didn't even say anything to me...",
         "<32>* that's... i don't even know what that is...",
         "<32>* well, i'll be going now",
         '<32>* bye...'
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
         '<25>{#p/toriel}{#f/1}{#n1}* What is it, my child?\n* Are you hungry?',
         '<25>{#f/0}* Perhaps you would like to know more about the book I am reading.',
         choicer.create('{#n1!}* (What do you say?)', 'Hungry', 'Book', 'Home', 'Nothing')
      ],
      chair1b: () => [
         '<25>{#p/toriel}{#n1}* What is it, my child?',
         choicer.create('{#n1!}* (What do you say?)', 'Hungry', 'Book', 'Home', 'Nothing')
      ],
      chair1c: [ '<25>{#p/toriel}{#n1}* Well, let me know if you need anything.' ],
      chair1d: [ '<25>{#p/toriel}{#n1}* Well, let me know if you change your mind.' ],
      chair1e: () => [
         '<25>{#p/toriel}{#f/1}{#n1}* Restless night?',
         '<25>{#f/1}* ...\n* If you like, I can read you this book...',
         '<25>{#f/0}* It is called \"Generous Monster\" and it was written by a human.',
         choicer.create('{#n1!}* (Read the book?)', 'Evet', 'Hayır')
      ],
      chair1f: pager.create(
         0,
         [ '<25>{#p/toriel}{#n1}{#f/1}* Back for a visit?', '<25>{#f/0}* Well, feel free to stay as long as you need.' ],
         [ '<26>{#p/toriel}{#n1}{#f/5}* I shall remain here, as I always have...' ]
      ),
      chair2a1: () => [
         '<25>{#p/toriel}{#f/1}{#n1}* Are you hungry?\n* Would you like me to make you a breakfast?',
         choicer.create('{#n1!}* (Have breakfast?)', 'Evet', 'Hayır')
      ],
      chair2a2: [ '<25>{#p/toriel}{#n1}* Wonderful!\n* I will be in the kitchen preparing it.' ],
      chair2a3: () => [
         '<25>{#p/toriel}{#f/1}{#n1}* Have you changed your mind about breakfast?',
         choicer.create('{#n1!}* (Have breakfast?)', 'Evet', 'Hayır')
      ],
      chair2a4: () =>
         SAVE.data.b.drop_snails
            ? [
                 '<25>{#p/toriel}{#f/3}{#n1}* You expect me to make another after you dropped the first one?',
                 '<25>{#f/4}* This child...',
                 '<25>{#f/0}* No, little one.\n* I will not prepare another breakfast.'
              ]
            : [
                 '<25>{#p/toriel}{#n1}* I have already served breakfast, little one.',
                 '<25>{#f/1}* We cannot have more than one breakfast per day, can we?',
                 '<25>{#f/0}* That would be silly.'
              ],
      chair2c1: () => [
         '<25>{#p/toriel}{#n1}* Ah, the book!\n* Yes, it is quite the fun little read.',
         '<25>{#f/0}* It is called \"Generous Monster\" and was written by a human.',
         '<25>{#f/1}* Would you like me to read it to you?',
         choicer.create('{#n1!}* (Read the book?)', 'Evet', 'Hayır')
      ],
      chair2c2: [ '<25>{#p/toriel}{#n1}* Splendid!', '<25>{#g/torielCompassionSmile}* ...' ],
      chair2c3: () => [
         '<25>{#p/toriel}{#f/1}{#n1}* Do you want me to read you the book now?',
         choicer.create('{#n1!}* (Read the book?)', 'Evet', 'Hayır')
      ],
      chair2c4: () => [
         '<25>{#p/toriel}{#f/1}{#n1}* Do you want me to read you the book again?',
         choicer.create('{#n1!}* (Read the book?)', 'Evet', 'Hayır')
      ],
      chair2c5: [ '<25>{#p/toriel}{#f/1}{#n1}* Alright, then...', '<25>{#p/toriel}{#g/torielCompassionSmile}* ...' ],
      chair2c6: [
         '<25>{#f/1}{#n1}* \"Once, there was a monster...\"',
         '<25>{#f/0}* \"And she loved a little human.\"',
         '<25>{#f/1}* \"And every day, the human would come visit...\"',
         '<25>{#f/0}* \"And they would run and play together in the fields.\"',
         '<25>{#f/1}* \"They\'d sing songs together, tell stories to each other...\"',
         '<25>{#f/0}* \"And they would play hide-and-go seek.\"',
         '<25>{#f/1}* \"And when the human was tired, she would tuck them into bed...\"',
         '<25>{#f/0}* \"And the human loved the monster very much.\"',
         '<25>{#f/0}* \"And the monster was happy.\"',
         '<25>{#f/1}* \"But as time went by, and the human grew older...\"',
         '<25>{#f/0}* \"The monster was often left alone.\"',
         '<25>{#f/1}* \"Then one day, the human came back...\"',
         '<25>{#f/0}* \"And the monster said \'Come, human, come and play!\'\"',
         '<25>{#f/5}* \"\'I am too big to play,\' said the human.\"',
         '<25>{#f/1}* \"\'I want to drive, to find a new home...\'\"',
         "<25>{#f/5}* \"'Sorry,' said the monster, 'but I am too poor to own a car.'\"",
         '<25>{#f/5}* \"\'All I have is my own two feet.\'\"',
         '<25>{#f/0}* \"\'Climb on my back, and I can run you to where you need.\'\"',
         '<25>{#f/0}* \"\'Then you can see the town and be happy.\'\"',
         '<25>{#f/1}* \"And so the human climbed onto the monster\'s back...\"',
         '<25>{#f/0}* \"And the monster took them to a new home.\"',
         '<25>{#f/0}* \"And the monster was happy.\"',
         '<25>{#f/1}* \"But the human stayed away for a long time...\"',
         '<25>{#f/5}* \"And the monster was sad.\"',
         '<25>{#f/0}* \"Then one day, the human came back.\"',
         '<25>{#f/1}* \"And the monster smiled from ear to ear and said...\"',
         '<25>{#f/1}* \"\'Come, human, come and ride on my back!\'\"',
         '<25>{#f/5}* \"\'I am too sad to ride around,\' said the human.\"',
         '<25>{#f/1}* \"\'I wish I had a family, and children of my own...\'\"',
         "<25>{#f/5}* \"'Sorry,' said the monster, 'but I cannot give that to you.'\"",
         '<25>{#f/5}* \"\'I am only one person.\'\"',
         '<25>{#f/0}* \"\'Visit for a while, and we can find you a date.\'\"',
         '<25>{#f/0}* \"\'Then you can find love and be happy.\'\"',
         '<25>{#f/1}* \"And so the human visited their old friend for a while...\"',
         '<25>{#f/0}* \"And the monster found them someone they might like.\"',
         '<25>{#f/0}* \"And the monster was happy.\"',
         '<25>{#f/5}* \"But the human stayed away for a long time.\"',
         '<25>{#f/1}* \"When they finally returned, the monster was so happy...\"',
         '<25>{#f/9}* \"She could hardly speak.\"',
         '<25>{#f/1}* \"\'Come, human,\' she whispered...\"',
         '<25>{#f/1}* \"\'Come and visit.\'\"',
         '<25>{#f/5}* \"\'I am too old and busy to visit,\' said the human.\"',
         '<25>{#f/1}* \"\'I want a place to rest for the night...\'\"',
         "<25>{#f/5}* \"'Sorry,' said the monster, 'but I do not have a bed your size.'\"",
         '<25>{#f/5}* \"\'I am still too poor to afford one.\'\"',
         '<25>{#f/0}* \"\'Sleep with me for the night.\'\"',
         '<25>{#f/0}* \"\'Then you can get some rest and be happy.\'\"',
         '<25>{#f/1}* \"And so the human and the monster cuddled together...\"',
         '<25>{#f/0}* \"And the monster was able to put the human to sleep.\"',
         '<25>{#f/0}* \"And the monster was happy.\"',
         '<25>{#f/5}* \"... but not really.\"',
         '<25>{#f/9}* \"And after a long time, the human came back again.\"',
         "<25>{#f/5}* \"'I am sorry, human,' said the monster, 'but I have fallen down.'\"",
         '<25>{#f/5}* \"\'My legs are giving out, I cannot take you anywhere.\'\"',
         '<25>{#f/10}* \"\'There is nowhere else I want to be,\' said the human.\"',
         '<26>{#f/5}* \"\'I cannot find you a date, I know no one else\' said the monster.\"',
         '<25>{#f/10}* \"\'There is no one else I want to be with,\' said the human.\"',
         '<25>{#f/5}* \"\'I am too weak for you to sleep on me\', said the monster.\"',
         '<25>{#f/10}* \"\'I do not need sleep any longer,\' said the human.\"',
         "<25>{#f/5}* \"'I am sorry,' sighed the monster.",
         '<25>{#f/5}* \"\'I wish I had something to offer, but I have nothing left.\'\"',
         '<25>{#f/9}* \"\'I am just an old monster approaching her death.\'\"',
         '<25>{#f/5}* \"\'I am sorry...\'\"',
         '<25>{#f/10}* \"\'I do not need very much now,\' said the human.\"',
         '<25>{#f/10}* \"\'Just a hug from my best friend before I die.\'\"',
         '<25>{#f/1}* \"\'Well,\' said the monster, straightening her posture...\"',
         '<25>{#f/0}* \"\'Well, an old monster is always here for that.\'\"',
         '<25>{#f/0}* \"\'Come, human, come to me. Be with me one last time.\'\"',
         '<25>{#f/9}* \"And so the human did.\"',
         '<25>{#f/10}* \"And the monster was happy.\"'
         
      ],
      chair2c7: [ '<25>{#f/0}{#n1}* Well, that was the story.', '<25>{#f/1}* I hope you liked it...' ],
      chair2c8: [ '<25>{#f/0}{#n1}* Well, that is all.' ],
      chair2d1: [
         '<25>{#p/toriel}{#f/1}{#n1}* Home...?\n* Could you be a little more specific?',
         '<99>{#p/human}{#n1!}* (What do you say?){!}\n§shift=48§Never§shift=72§When can I\n§shift=48§mind§shift=80§go home?{#c/0/6/4}'
      ],
      chair2d2: [
         '<25>{#p/toriel}{#f/1}{#n1}* But... this is your home now, is it not?',
         '<99>{#p/human}{#n1!}* (What do you say?){!}\n§shift=144§How to exit\n§shift=64§Sorry§shift=40§the Outlands{#c/0/8/2}'
      ],
      chair2d3: [
         '<25>{#p/toriel}{#f/5}{#n1}* Please, try to understand...',
         '<25>{#p/toriel}{#f/9}* I only want the best for you.'
      ],
      chair2d4: [
         '<25>{#p/toriel}{#f/5}{#n1}* My child...',
         '<99>{#p/human}{#n1!}* (What do you say?){!}\n§shift=144§How to exit\n§shift=64§Sorry§shift=40§the Outlands{#c/0/8/2}'
      ],
      chair2d5: [ '<25>{#p/toriel}{#f/5}{#n1}* ...' ],
      chair2d6: [
         '<25>{#p/toriel}{#f/9}{#n1}* ...',
         '<25>{#p/toriel}{#f/9}* Please, wait here.',
         '<25>{#p/toriel}{#f/5}* There is something I have to do.'
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
         '<25>{#p/toriel}* In this room lies a new kind of puzzle.',
         [ 1, 5 ].includes(SAVE.data.n.state_wastelands_dummy)
            ? '<25>{#f/3}* Perhaps you will do better here than with the dummy.'
            : '<25>{#f/1}* Do you think you can solve it?'
      ],
      danger_puzzle2: () =>
         world.darker
            ? [ "<32>{#p/basic}* It's too tall for you to reach." ]
            : [ "<32>{#p/basic}* This terminal's staggering height towers over you, blocking your eager approach." ],
      danger_puzzle3: () => [
         [ 1, 5 ].includes(SAVE.data.n.state_wastelands_dummy)
            ? '<25>{#p/toriel}{#f/3}* What is it now...'
            : '<25>{#p/toriel}{#f/1}* What is the problem?\n* Do you need assistance?'
      ],
      danger_puzzle4: () => [
         ...([ 1, 5 ].includes(SAVE.data.n.state_wastelands_dummy)
            ? [ '<25>{#p/toriel}{#f/5}* Ah... I see.', '<25>{#f/5}* The terminal is too high for you to reach it.' ]
            : [
                 '<25>{#p/toriel}{#f/7}* ... oh my.',
                 '<25>{#f/6}* It seems there is a bit of a design fault here.',
                 '<25>{#f/1}* So the terminal is too high for you to reach it...?'
              ]),
         '<25>{#f/0}* No matter.\n* I will operate it for you.',
         '<25>{#f/0}* ...',
         '<25>{#f/0}* There is a riddle to be solved here.\n* Would you like to try?',
         choicer.create('* (Solve the riddle?)', 'Evet', 'Hayır')
      ],
      danger_puzzle5a: [
         '<25>{#p/toriel}* Excellent!\n* The eagerness to learn and grow is important.',
         '<25>{#f/0}* Especially for a youngster such as yourself.'
      ],
      danger_puzzle5b: [
         '<25>{#p/toriel}{#f/0}* The riddle takes the form of a question.',
         "<25>{#p/toriel}{#f/1}* \"What's baked like a cake and rhymes with 'lie?'\""
      ],
      danger_puzzle5c: [
         '<32>{#p/human}* (...)\n* (You tell Toriel the answer.)',
         '<25>{#p/toriel}{#f/0}* ... ah, very good.\n* And with such a positive attiude!'
      ],
      danger_puzzle5d: [
         '<32>{#p/human}* (...)\n* (You tell Toriel you do not know the answer.)',
         '<25>{#p/toriel}{#f/1}* ... is something wrong?\n* You seem to have something on your mind.',
         '<25>{#f/5}* ... hmm...',
         '<25>{#f/0}* Well, alright.\n* I will solve the riddle for you this time.'
      ],
      danger_puzzle5e: () =>
         [ 1, 5 ].includes(SAVE.data.n.state_wastelands_dummy)
            ? [ '<25>{#p/toriel}{#f/5}* ...', '<25>{#f/5}* I see.' ]
            : [ '<25>{#p/toriel}{#f/0}* ...', '<25>{#f/0}* I suppose I can solve the riddle for you this time.' ],
      danger_puzzle6: () => [
         [ 1, 5 ].includes(SAVE.data.n.state_wastelands_dummy) && SAVE.data.b.w_state_riddleskip
            ? '<25>{#p/toriel}{#f/5}* And... {#x1}there.\n* The pathway is clear.'
            : '<25>{#p/toriel}* And... {#x1}there!\n* The pathway is clear!'
      ],
      danger_puzzle7: () => [
         [ 1, 5 ].includes(SAVE.data.n.state_wastelands_dummy) && SAVE.data.b.w_state_riddleskip
            ? '<25>{#p/toriel}{#f/5}* I will wait for you to enter the next room.'
            : '<25>{#p/toriel}* Once ready, you may enter the next room.'
      ],
      danger_puzzle8: () =>
         SAVE.data.b.svr
            ? [ "<32>{#p/human}* (But you still couldn't reach the terminal.)" ]
            : [ '<32>{#p/basic}* Even now, the terminal still stands as tall as ever.' ],
      denie: [ "<32>{#p/human}* (You're carrying too much to take that.)" ],
      dipper: {
         a: () => [
            '<32>{#p/human}* (You got the Little Dipper.)',
            choicer.create('* (Equip the Little Dipper?)', 'Evet', 'Hayır')
         ],
         b: [ "<32>{#p/human}* (You're carrying too much to take that.)" ]
      },
      drop_pie: [ '<25>{#p/toriel}{#f/1}* Pies are for eating, not for splattering on the floor.' ],
      drop_pie3: [ '<25>{#p/toriel}{#f/1}* Please do not spill food on the floor.' ],
      drop_snails: [ '<25>{#p/toriel}{#f/1}* What did those poor fried snails ever do to you.' ],
      drop_soda: [ "<32>{#p/basic}{#n1}* Aww c'mon! ;)", '<32>* I poured my heart into that! ;)' ],
      drop_steak: [ '<32>{#p/basic}{#n1}* Seriously!? ;)', '<32>* That steak was utterly priceless! ;)' ],
      dummy1: [
         '<25>{#p/toriel}{#f/0}* Your next lesson involves encounters with other monsters.',
         '<25>{#f/1}* As a human roaming the outpost, it is likely you will be attacked...',
         '<25>{#f/0}* If that happens, you will enter what is known as a FIGHT.',
         '<25>{#f/0}* Thankfully, there are several ways to resolve one.',
         '<25>{#f/1}* For now, I suggest striking up a friendly conversation...',
         '<25>{#f/0}* ... thereby giving me a chance to sort out the conflict for you.'
      ],
      dummy2: [ '<25>{#p/toriel}* To start, you may practice talking with the dummy.' ],
      dummy3: [
         '<25>{#p/toriel}{#f/7}* ... you think that I am the dummy?',
         '<25>{#f/6}* Hahaha!\n* How adorable!',
         '<25>{#f/0}* Unfortunately, I am but a worrisome old lady.'
      ],
      dummy4: [
         '<25>{#p/toriel}* There is nothing to be afraid of, my child.',
         '<25>* A simple training dummy cannot harm you.'
      ],
      dummy5: [ '<25>{#p/toriel}{#f/1}* Go on, little one...' ],
      dummy6: [
         '<25>{#p/toriel}{#f/2}* Child, no!\n* The dummy was not made for fighting!',
         '<25>{#f/1}* Besides, we do not want to hurt anyone, do we?',
         '<25>{#f/0}* Come now.'
      ],
      dummy7: [ '<25>{#p/toriel}* Excellent!\n* You appear to be quite the fast learner.' ],
      dummy8: [
         '<25>{#p/toriel}{#f/1}* You ran away...?',
         '<25>{#f/0}* Actually, that may have been a wise choice.',
         '<26>{#f/1}* By escaping, you have avoided any potential conflict...',
         '<25>{#f/0}* ... even if it WAS only a simple training dummy.'
      ],
      dummy9: [ '<25>{#p/toriel}{#f/3}* ...', '<25>{#f/4}* ...', '<25>{#f/0}* The next room awaits.' ],
      dummy9a: [ '<25>{#p/toriel}{#f/3}* ...', '<25>{#f/4}* ...', '<25>{#f/6}* The next room awaits.' ],
      dummy10: [
         '<25>{#p/toriel}{#f/7}* My child, that is...',
         '<25>{#f/0}* ... that is perhaps the most adorable thing I have ever seen.',
         '<25>{#f/0}* In any case, you have handled this lesson admirably.',
         '<25>{#f/0}* The next room awaits.'
      ],
      dummy11: [ '<25>{#p/toriel}* The next room awaits.' ],
      dummy12: [
         '<25>{#p/toriel}{#f/2}* My goodness, child!\n* Have mercy!',
         '<25>{#f/1}* ...',
         '<25>{#f/0}* Thankfully, that was only a training dummy.',
         '<25>{#f/1}* In the future, however, it would be wise...',
         '<25>{#f/0}* ... not to slap people half to death!',
         '<26>{#f/0}* Anywho.\n* The next room awaits.'
      ],
      eat_pie: [ '<25>{#p/toriel}{#f/1}{#n1}* Tasty, is it not?' ],
      eat_snails: [ '<25>{#p/toriel}{#f/0}{#n1}* I hope your breakfast sufficed.' ],
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
                         "<25>{#f/6}* But now, I'm not sure.",
                         '<25>{#f/8}* ...',
                         '<25>{#f/8}* I guess... I got a bit carried away back there.',
                         "<25>{#f/5}* But that's okay, right?\n* You'll forgive me, won't you?"
                      ]
                    : [
                         "<25>{#f/6}* I'm still not really sure what happened back there...",
                         "<25>{#f/5}* It's... kinda scaring me, haha...",
                         '<25>{#f/8}* ...',
                         '<25>{#f/8}* Maybe... we should hold off on things for now.',
                         "<25>{#f/5}* But that's okay, right?\n* You'll be fine with that, won't you?"
                      ]),
                 '<25>{#f/6}* ...',
                 '<25>{#f/8}* Goodbye, $(name)...',
                 ...(SAVE.flag.n.genocide_milestone < 7 ? [ "<25>{#f/5}* I'll be back before you know it." ] : [])
              ],
      endtwinklyAreaction: [
         '<32>{#p/basic}* Sorry, did I miss something?',
         "<32>* I've never talked to him in my life, let alone go on some mission with him.",
         "<32>* Oh well.\n* It wouldn't be the first time he's made up stories about me."
      ],
      endtwinklyB: () =>
         SAVE.data.b.w_state_lateleave
            ? [
                 '<25>{#p/twinkly}{#f/5}{#v/0}* Well.\n* That was unexpected.',
                 "<25>{#f/11}{#v/0}* You think you can just break the rules, don'tcha?",
                 '<25>{#f/7}{#v/0}* Hee hee hee...',
                 "<25>{#f/0}{#v/1}* In this world, it's KILL or BE killed."
              ]
            : [
                 '<25>{#p/twinkly}{#f/5}{#v/0}* Clever.\n* Verrrryy clever.',
                 "<25>{#f/11}{#v/0}* You think you're really smart, don'tcha?",
                 '<25>{#f/7}{#v/0}* Hee hee hee...',
                 "<25>{#f/0}{#v/1}* In this world, it's KILL or BE killed."
              ],
      endtwinklyB2: [
         '<25>{#f/8}{#v/0}* If you had just killed a FEW more monsters...',
         "<25>{#f/9}{#v/0}* Well, maybe I shouldn't reveal my plans this early.",
         '<25>{#f/7}{#v/0}* You know, $(name)...',
         "<25>{#f/5}{#v/0}* It's only a matter of time before we're together again.",
         '<25>{#f/6}{#v/0}* Try a little harder next time, and maybe...',
         "<25>{#f/5}{#v/0}* You'll get to see something new.",
         '<25>{#f/11}{#v/0}* Until we meet again...'
      ],
      endtwinklyB3: [
         '<25>{#f/8}{#v/0}* If you had just killed ONE more monster...',
         "<25>{#f/9}{#v/0}* Well, maybe I shouldn't reveal my plans this early.",
         '<25>{#f/7}{#v/0}* You know, $(name)...',
         "<25>{#f/5}{#v/0}* It's only a matter of time before we're together again.",
         '<25>{#f/6}{#v/0}* Try a little harder next time, and maybe...',
         "<25>{#f/5}{#v/0}* You'll get to see something new.",
         '<25>{#f/11}{#v/0}* Until we meet again...'
      ],
      endtwinklyBA: () => [
         SAVE.data.n.state_wastelands_napstablook === 5
            ? '<25>{#p/twinkly}{#f/6}{#v/0}* So you made it through without killing anyone.'
            : '<25>{#p/twinkly}{#f/6}{#v/0}* So you spared the life of everyone you came across.',
         '<25>{#f/5}{#v/0}* I bet you feel really great.',
         '<25>{#f/2}{#v/1}* But what will you do if you meet a serial murderer?',
         "<25>{#f/9}{#v/0}* You'll die, and you'll die, and you'll die...",
         "<25>{#f/5}{#v/0}* Eventually, you'll tire of trying.",
         '<25>{#f/11}{#v/0}* What then, huh?',
         '<25>{#f/2}{#v/1}* Will you KILL out of frustration?',
         '<25>{#f/14}{#v/1}* Or will you simply GIVE UP?',
         '<25>{#f/11}{#v/0}* Hee hee hee...',
         '<25>{#f/7}{#v/0}* This is gonna be SO much fun.',
         "<25>{#f/9}{#v/0}* I'll be watching!"
      ],
      endtwinklyBB1: () => [
         SAVE.data.b.w_state_lateleave
            ? "<25>{#p/twinkly}{#f/6}{#v/0}* So you managed to stay out of a few measly people's way."
            : '<25>{#p/twinkly}{#f/6}{#v/0}* So you spared the life of a few measly people.',
         '<25>{#f/11}{#v/0}* But what about the others, huh?',
         '<25>{#f/7}{#v/0}* Froggit, Flutterlyte, Gelatini, Silente, Oculoux, Mushy...',
         "<25>{#f/6}{#v/0}* Don'tcha think any of them have families?",
         "<25>{#f/8}{#v/0}* Don'tcha think any of them have friends?",
         "<25>{#f/5}{#v/0}* Each one could've been someone else's Toriel.",
         '<25>{#f/5}{#v/0}* ...',
         '<25>{#f/7}{#v/0}* Selfish brat.',
         '<25>{#f/0}{#v/1}* Monsters are dead because of you.'
      ],
      endtwinklyBB2: () => [
         SAVE.data.b.w_state_lateleave
            ? "<25>{#p/twinkly}{#f/6}{#v/0}* So you managed to stay out of one person's way."
            : '<25>{#p/twinkly}{#f/6}{#v/0}* So you spared the life of a single person.',
         '<25>{#f/11}{#v/0}* But what about everyone else, huh?',
         '<25>{#f/7}{#v/0}* Froggit, Flutterlyte, Gelatini, Silente, Oculoux, Mushy...',
         "<25>{#f/0}{#v/0}* They're all gone now.",
         "<25>{#f/11}{#v/0}* What's Toriel gonna do when she finds out, huh?",
         '<25>{#f/2}{#v/1}* What if she KILLS herself out of grief?',
         "<25>{#f/11}{#v/0}* If you think you're saving her just by SPARING her...",
         "<25>{#f/7}{#v/0}* Then you're even dumber than I thought.",
         '<25>{#f/9}* Well, see ya!'
      ],
      endtwinklyBB3: () => [
         SAVE.data.b.w_state_lateleave
            ? "<25>{#p/twinkly}{#f/6}{#v/0}* So you managed to stay out of almost everyone's way."
            : '<25>{#p/twinkly}{#f/6}{#v/0}* So you spared the life of almost everyone.',
         SAVE.data.b.w_state_lateleave
            ? '<25>{#p/twinkly}{#f/11}{#v/0}* But what about the one you DID get in the way of, huh?'
            : "<25>{#p/twinkly}{#f/11}{#v/0}* But what about the one you DIDN'T spare, huh?",
         '<25>{#f/7}{#v/0}* Froggit, Flutterlyte, Gelatini, Silente, Oculoux, Mushy...',
         "<25>{#f/6}{#v/0}* Don'tcha think any of them have families?",
         "<25>{#f/8}{#v/0}* Don'tcha think any of them have friends?",
         "<25>{#f/5}{#v/0}* The one you killed could've been someone else's Toriel.",
         '<25>{#f/5}{#v/0}* ...',
         '<25>{#f/7}{#v/0}* Selfish brat.',
         "<25>{#f/0}{#v/1}* Someone's dead because of you."
      ],
      endtwinklyBC: [
         "<25>{#p/twinkly}{#f/5}{#v/0}* I'm sure you're well aware of that, though...",
         "<25>{#f/6}{#v/0}* Considering you've already killed Toriel once before.",
         "<25>{#f/7}{#v/0}* Ain't that right, brat?",
         '<25>{#f/2}{#v/1}* You MURDERED her.',
         "<25>{#f/7}{#v/0}* And then, you felt bad...\n* Ain't that right?",
         '<25>{#f/7}{#v/0}* Hee hee hee...',
         "<25>{#f/11}{#v/0}* Do you think you're the only one with that power?",
         '<25>{#f/6}{#v/0}* The power to reshape the universe, purely by your determination...',
         '<25>{#f/8}{#v/0}* The power to SAVE...',
         '<25>{#f/7}{#v/0}* That used to be MY power, you know.',
         '<25>{#f/6}{#v/0}* Seems YOUR desires for this world override MINE.',
         '<25>{#f/5}{#v/0}* Well then.\n* Enjoy that power while you can.',
         "<25>{#f/9}{#v/0}* I'll be watching!"
      ],
      endtwinklyC: [
         '<25>{#f/7}{#v/0}* After all, this used to be MY power.',
         '<25>{#f/6}{#v/0}* The power to reshape the universe, purely by your determination...',
         '<25>{#f/8}{#v/0}* The power to SAVE...',
         '<25>{#f/6}{#v/0}* I thought I was the only one who could do that.',
         '<25>{#f/6}{#v/0}* Seems YOUR desires for this world override MINE.',
         '<25>{#f/5}{#v/0}* Well then.\n* Enjoy that power while you can.',
         "<25>{#f/9}{#v/0}* I'll be watching!"
      ],
      endtwinklyD: [
         "<25>{#p/twinkly}{#f/11}{#v/0}* You're one hell of a tease, huh?",
         '<25>{#f/8}{#v/0}* Beating monsters to the brink of death, only to let them go...',
         "<25>{#f/7}{#v/0}* What will you do if a monster doesn't WANT your mercy?",
         '<25>{#f/6}{#v/0}* Will you snuff the light out of their eyes?',
         '<25>{#f/5}{#v/0}* Or will you realize your faulty \"pacifism\" is for nothing?',
         '<25>{#f/11}{#v/0}* Hee hee hee...',
         '<25>{#f/7}{#v/0}* This is gonna be SO much fun.',
         "<25>{#f/9}{#v/0}* I'll be watching!"
      ],
      endtwinklyE: [
         "<25>{#p/twinkly}{#f/7}{#v/0}* Wow, you're utterly repulsive.",
         '<26>{#f/11}{#v/0}* You got by peacefully...',
         "<25>{#f/5}{#v/0}* Then, you figured that wasn't good enough for you.",
         '<25>{#f/2}{#v/1}* So you KILLED her just to see what would happen.',
         '<25>{#f/7}{#v/0}* Hee hee hee...',
         '<25>{#f/0}{#v/0}* You did it out of BOREDOM.'
      ],
      endtwinklyEA: [ "<25>{#f/11}{#v/0}* Don't think I don't know how this works..." ],
      endtwinklyEB: [ "<25>{#f/6}{#v/0}* It's sad, though..." ],
      endtwinklyF: [ '<25>{#p/twinkly}{#f/11}{#v/0}* Look at you, playing with her life like this...' ],
      endtwinklyFA: [ '<25>{#f/7}{#v/0}* Killing her, leaving her, killing her again...' ],
      endtwinklyFB: [ '<25>{#f/7}{#v/0}* Leaving her, killing her, leaving her again...' ],
      endtwinklyFXA: [
         "<25>{#f/11}{#v/0}* It's fun, isn't it?",
         '<25>{#f/6}{#v/0}* Endlessly toying with the lives of others...',
         '<25>{#f/8}{#v/0}* Watching how they react to every possible decision...',
         "<25>{#f/11}{#v/0}* Isn't it thrilling?",
         '<25>{#f/7}{#v/0}* Hee hee hee...',
         "<25>{#f/9}{#v/0}* I wonder what you'll do next.",
         "<25>{#f/5}{#v/0}* I'll be watching..."
      ],
      endtwinklyG: [
         "<25>{#p/twinkly}{#f/10}{#v/0}* You just can't get enough, can you~",
         '<25>{#f/11}{#v/0}* How many more times will you KILL her, eh?',
         '<25>{#f/7}{#v/0}* Hee hee hee...',
         '<25>{#f/0}{#v/1}* You kinda remind me of myself.',
         '<25>{#f/9}{#v/0}* Well, cya!'
      ],
      endtwinklyG1: [
         '<25>{#p/twinkly}{#f/6}{#v/0}* Again?\n* Golly...',
         '<25>{#f/0}{#v/1}* You REALLY remind me of myself.'
      ],
      endtwinklyG2: [
         '<25>{#p/twinkly}{#f/6}{#v/0}* Again!?',
         "<25>{#f/8}{#v/0}* Wow, you're even worse than I thought."
      ],
      endtwinklyH: () => [
         SAVE.data.b.w_state_lateleave
            ? "<25>{#p/twinkly}{#f/5}{#v/0}* So you've finally gotten by peacefully, huh?"
            : "<25>{#p/twinkly}{#f/5}{#v/0}* So you've finally decided to show mercy, huh?",
         '<25>{#f/5}{#v/0}* And after all that KILLING...',
         '<25>{#f/11}{#v/0}* Say, was this your idea all along?',
         '<25>{#f/2}{#v/1}* To get a rush out of her death, then spare her once you got bored?',
         '<25>{#f/7}{#v/0}* Hee hee hee...',
         '<25>{#f/11}{#v/0}* What a saint you must think you are.',
         "<25>{#f/5}{#v/0}* But hey, it's not as if I don't know how this works..."
      ],
      endtwinklyI: [
         '<25>{#p/twinkly}{#f/11}{#v/0}* Hee hee hee...',
         '<25>{#f/7}{#v/0}* I hope you like your choice.',
         "<25>{#f/9}{#v/0}* I mean, it's not as if you can go back and change fate.",
         "<25>{#f/0}{#v/1}* In this world, it's KILL or BE killed.",
         '<25>{#f/5}{#v/0}* That old woman thought she could break the rules.',
         '<25>{#f/8}{#v/0}* She tried so hard to save you humans...',
         "<25>{#f/6}{#v/0}* But when it came down to it, she couldn't even save herself."
      ],
      endtwinklyIX: [
         '<25>{#p/twinkly}{#f/11}{#v/0}* Hee hee hee...',
         '<25>{#f/11}{#v/0}* So you finally caved in and killed someone, huh?',
         '<25>{#f/7}{#v/0}* Well, I hope you like your choice.',
         "<25>{#f/9}{#v/0}* I mean, it's not as if you can go back and change fate.",
         "<25>{#f/0}{#v/1}* In this world, it's KILL or BE killed.",
         "<25>{#f/8}{#v/0}* ... what's wrong?\n* Did she not last as long as you thought?",
         '<26>{#f/6}{#v/0}* Oh, how terrible.\n* Guess not everyone can be beat into submission.'
      ],
      endtwinklyIA: [ '<25>{#f/11}{#v/0}* What an idiot!' ],
      endtwinklyIAX: [ '<25>{#f/7}{#v/0}* What a shame for her.' ],
      endtwinklyIB: [ '<25>{#f/6}{#v/0}* As for you...' ],
      endtwinklyJ: [
         '<25>{#p/twinkly}{#f/6}{#v/0}* Wow.',
         '<25>{#f/7}{#v/0}* And here I thought you were the righteous one for showing mercy.',
         '<25>{#f/11}{#v/0}* Hah!\n* What a joke.',
         '<25>{#f/6}{#v/0}* ...',
         '<25>{#f/6}{#v/0}* How did it feel to finally satisfy your violent side?',
         '<25>{#f/7}{#v/0}* Hee hee hee...',
         "<25>{#f/0}{#v/1}* I bet it felt GOOD, didn't it?",
         '<25>{#f/11}{#v/0}* I mean, I should know...'
      ],
      endtwinklyK: [
         '<25>{#p/twinkly}{#f/5}{#v/0}* Nice to see you again.',
         "<25>{#f/6}{#v/0}* By the way, you're the most boring person in the galaxy.",
         '<25>{#f/12}{#v/0}* Getting by peacefully, then going back just to do it again?',
         '<25>{#f/8}{#v/0}* Come on...',
         "<25>{#f/2}{#v/1}* You know as well as I do that it's KILL or BE killed."
      ],
      endtwinklyK1: [
         "<25>{#p/twinkly}{#f/6}* Aren't you getting tired of this?",
         '<25>{#f/8}{#v/0}* Come on...',
         '<25>{#f/2}{#v/1}* You KNOW deep down that part of you wants to hurt her.',
         "<25>{#f/14}{#v/1}* A few good hits, and she'd be dead before your very eyes.",
         "<25>{#f/11}{#v/0}* Wouldn't that be exciting?",
         '<25>{#f/6}{#v/0}* ...',
         '<25>{#f/8}{#v/0}* ...',
         '<25>{#f/7}{#v/0}* See ya, idiot.'
      ],
      endtwinklyK2: [
         '<25>{#p/twinkly}{#f/8}{#v/0}* Are you doing this just to see how I react?',
         '<25>{#f/6}{#v/0}* Is that what this is about?',
         "<25>{#f/7}{#v/0}* Well, don't expect to get anything else outta me.",
         '<25>{#f/6}{#v/0}* All this boring pacifism is getting tiresome.',
         '<25>{#f/11}{#v/0}* Now, if something more interesting were to happen...',
         "<25>{#f/9}{#v/0}* Perhaps I'd be more inclined to talk.",
         '<25>{#f/6}{#v/0}* ...',
         '<25>{#f/8}{#v/0}* ...',
         '<25>{#f/7}{#v/0}* See ya, idiot.'
      ],
      endtwinklyKA: [
         "<25>{#f/7}{#v/0}* Sooner or later, you'll be forced to realize that.",
         '<25>{#f/11}{#v/0}* And when that time comes...',
         "<25>{#f/5}{#v/0}* Well, let's just say I'm interested to see what happens.",
         '<25>{#f/11}{#v/0}* Hee hee hee...',
         '<25>{#f/9}{#v/0}* Good luck!'
      ],
      endtwinklyKB: [
         '<25>{#f/11}{#v/0}* Hee hee hee...',
         "<25>{#f/7}{#v/0}* Maybe that's why you killed that one monster.",
         '<25>{#f/8}{#v/0}* I mean, you went almost the whole way without killing anyone...',
         '<25>{#f/6}{#v/0}* But somewhere along the line, you screwed up.',
         '<25>{#f/5}{#v/0}* All that good karma you had went straight down the toilet.',
         "<25>{#f/11}{#v/0}* Golly, you can't do anything right!",
         '<25>{#f/11}{#v/0}* What a joke!'
      ],
      endtwinklyKC: [
         '<25>{#f/11}{#v/0}* Hee hee hee...',
         "<25>{#f/7}{#v/0}* Maybe that's why you killed those other monsters.",
         '<25>{#f/8}{#v/0}* I mean, you had a good run, but...',
         "<25>{#f/6}{#v/0}* What's the point in mercy if it doesn't mean anything?",
         '<25>{#f/7}{#v/0}* And believe me, after you did what you did...',
         "<25>{#f/2}{#v/1}* It doesn't mean JACK.",
         '<25>{#f/6}{#v/0}* ...',
         '<25>{#f/8}{#v/0}* ...',
         '<25>{#f/7}{#v/0}* See ya, idiot.'
      ],
      endtwinklyKD: [
         "<25>{#f/11}{#v/0}* What's wrong with killing Toriel, huh?\n* Too good for that?",
         '<25>{#f/7}{#v/0}* Hee hee hee...',
         "<25>{#f/2}{#v/1}* I know you're still rotten to the core.",
         '<25>{#f/11}{#v/0}* I mean, you managed to take out everyone in your path...',
         '<25>{#f/6}{#v/0}* But when it came to the final hurdle, you failed.',
         "<25>{#f/11}{#v/0}* Golly, you can't do anything right!",
         '<25>{#f/11}{#v/0}* What a joke!'
      ],
      endtwinklyL: [
         '<25>{#p/twinkly}{#f/6}{#v/0}* Back again, huh?\n* Golly...',
         "<25>{#f/8}{#v/0}* You've changed the timeline around so much...",
         "<25>{#f/6}{#v/0}* I don't even know what to think now.",
         '<25>{#f/8}{#v/0}* Are you good?\n* Evil?\n* Just curious?',
         '<25>{#f/6}{#v/0}* I dunno.',
         '<25>{#f/5}{#v/0}* There is one thing, though...',
         "<25>{#f/5}{#v/0}* One thing I KNOW you haven't done yet.",
         '<25>{#f/11}{#v/0}* Hee hee hee...',
         "<25>{#f/7}{#v/0}* That's right.",
         "<25>{#f/7}{#v/0}* You haven't killed everyone here in one run yet.",
         "<25>{#f/11}{#v/0}* Aren't you at least a LITTLE curious?",
         '<25>{#f/8}{#v/0}* Come on, $(name)...',
         "<25>{#f/5}{#v/0}* I know you're in there somewhere."
      ],
      endtwinklyL1: [
         '<25>{#p/twinkly}{#f/6}{#v/0}* Well well, we meet again.',
         '<25>{#f/8}{#v/0}* How many times is this now?',
         "<25>{#f/6}{#v/0}* Whatever.\n* Doesn't matter.",
         '<25>{#f/6}{#v/0}* You KNOW what you have to do, $(name).',
         '<25>{#f/8}{#v/0}* ...',
         "<25>{#f/5}{#v/0}* I'll be waiting."
      ],
      exit1: [
         '<25>{#p/toriel}{#f/13}* You wish to return \"home,\" do you not?',
         '<25>{#f/9}* ...',
         '<25>{#f/9}* If you leave here, I will not be able to protect you.',
         '<25>{#f/9}* I will not be able to save you from the dangers that lie ahead.',
         '<25>{#f/13}* So, please, little one...',
         '<25>{#f/9}* Go back the other way.'
      ],
      exit2: [
         '<25>{#p/toriel}{#f/13}* Every human that ends up here meets the same fate.',
         '<25>{#f/9}* I have seen it repeat time and time again.',
         '<25>{#f/13}* They come.',
         '<25>{#f/13}* They leave.',
         '<25>{#f/9}* ... they die.',
         '<25>{#f/13}* My child...',
         '<25>{#f/13}* If you leave the Outlands...',
         '<25>{#f/9}* They...\n* {@fill=#f00}ASGORE{@fill=#fff}...\n* Will take your SOUL.'
      ],
      exit3: [
         '<25>{#p/toriel}{#f/9}* ...',
         '<25>{#f/13}* I did not want to say this, but...',
         '<25>{#f/11}* I cannot allow you to continue this way.',
         '<25>{#f/9}* For your own sake, child...',
         '<25>{#f/9}* Do not follow me into the next room.'
      ],
      exit4: [
         '<25>{#p/toriel}{#p/toriel}{#f/13}* ...',
         '<25>{#f/10}* ... of course.',
         '<25>{#f/9}* Perhaps it was always meant to come to this.',
         '<25>{#f/9}* Perhaps I was foolish to think you would be any different.',
         '<25>{#f/9}* ...',
         '<25>{#f/13}* I am afraid there is little choice now.',
         '<25>{#f/13}* Forgive me, my child...',
         '<25>{#f/11}* But I cannot allow you to leave.'
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
                    ? "<32>{#p/basic}* After you sleep at Toriel's home, she destroys the bridge to the outpost."
                    : "<32>{#p/basic}* After you return to Toriel's home, she destroys the bridge to the outpost.",
                 ...(outlandsKills() > 10
                    ? [
                         "<32>* Time goes by, and Toriel soon finds out about the monsters you've killed.",
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
                         '<32>* All the while, the outpost residents await salvation...'
                      ]
                    : [
                         '<32>* Time goes by, and Toriel does her best to care for you.',
                         '<32>* Reading books, baking pies...',
                         '<32>* Tucking you snugly into bed, each and every night...',
                         ...(lateleave
                            ? [ '<32>* And hugging you so tightly that you never ever try to run away again.' ]
                            : [ '<32>* And all the hugging you could ever hope for.' ]),
                         '<32>* All the while, the outpost residents await salvation...'
                      ]),
                 '<32>* ... from a human that may never reach them.',
                 '<32>* Is this truly the outcome you had hoped for?',
                 '<32>* Is this truly what they deserve?'
              ],
      food: () => [
         ...(SAVE.data.n.state_wastelands_mash === 2
            ? [
                 '<25>{#p/toriel}{#f/1}* Sorry for the wait...',
                 '<25>{#f/3}* It seems that little white dog has raided my kitchen again.',
                 '<25>{#f/4}* You should see the state of that pie...',
                 '<26>{#f/0}* But anyhoo.\n* I have prepared a plate of fried snails for you.'
              ]
            : [ '<25>{#p/toriel}* Breakfast is ready!', '<26>* I have prepared a plate of fried snails for you.' ]),
         '<25>{#f/1}* I will leave them here on the table...'
      ],
      fridgetrap: {
         a: () =>
            SAVE.data.b.svr
               ? []
               : world.darker
               ? [ "<32>{#p/basic}* You wouldn't like what's in the fridge." ]
               : [ '<32>{#p/basic}* There is a brand-name chocolate bar in the fridge.' ],
         b: () => [
            ...(SAVE.data.b.svr ? [] : [ '<32>{#p/basic}* ...', '<32>* Do you want it?' ]),
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
         '<25>{#p/toriel}{#f/1}* ... and you want to play one of your songs?',
         '<25>{#f/0}* Alright, I will see what I can do.'
      ],
      front1x: [ '<25>{#p/toriel}{#f/1}* ... hello?' ],
      front2: () => [
         ...(world.postnoot
            ? [
                 '<25>{#p/toriel}{#f/2}* Up already!?',
                 '<25>{#f/1}* You were not asleep for very long...',
                 '<25>{#f/5}* ...',
                 world.nootflags.has('toriel') // NO-TRANSLATE

                    ? '<25>{#f/1}* The atmospheric system still does not seem to be fixed.'
                    : '<25>{#f/1}* The atmospheric system seems to be malfunctioning.',
                 '<25>{#f/1}* If you begin to feel weak, do not hesitate to return to bed.',
                 '<26>{#f/0}* ... anywho.'
              ]
            : [
                 '<25>{#p/toriel}{#f/2}* How long have you been standing there!?',
                 '<25>{#f/5}* ...',
                 '<25>{#f/0}* I suppose it matters not.'
              ]),
         '<25>{#f/0}* Napstablook, a visitor here, has offered to play their music.',
         '<25>{#f/0}* In fact, they invited you specifically to be with them on stage!',
         '<25>{#f/1}* Would you like to visit the activities room to see them?',
         ...(SAVE.data.n.state_wastelands_mash === 1
            ? [
                 '<25>{#f/3}* Oh, and, I apologize about the state of the pie.',
                 '<25>{#f/4}* It seems that little white dog has raided my kitchen again...'
              ]
            : 3 <= SAVE.data.n.cell_insult
            ? [
                 '<25>{#f/5}* Oh, and, I apologize about the state of the pie.',
                 '<25>{#f/9}* I did my best to try and salvage it...'
              ]
            : []),
         choicer.create("* (See Napstablook's show?)", 'Evet', 'Hayır')
      ],
      front2a: [ '<25>{#p/toriel}{#f/0}* Wonderful!\n* I will let them know you are coming.' ],
      front2b: [ '<25>{#p/toriel}{#f/5}* ...', '<25>{#p/toriel}{#f/5}* I will be in the living room if you need me.' ],
      front3: () => [
         ...(world.postnoot
            ? [
                 '<25>{#p/toriel}{#f/0}* Oh, hello, little one.\n* You are up early.',
                 '<25>{#f/1}* Are you sure you slept for a long enough time?',
                 '<25>{#f/5}* ...',
                 world.nootflags.has('toriel') // NO-TRANSLATE

                    ? '<25>{#f/1}* The atmospheric system still does not seem to be fixed.'
                    : '<25>{#f/1}* The atmospheric system seems to be malfunctioning.',
                 '<25>{#f/1}* If you begin to feel weak, do not hesitate to return to bed.',
                 '<26>{#f/0}* ... aside from that...'
              ]
            : [ '<25>{#p/toriel}* Good morning, little one.' ]),
         ...(SAVE.data.n.state_wastelands_mash === 1
            ? [
                 '<25>{#f/3}* It seems that little white dog has raided my kitchen again.',
                 '<25>{#f/4}* You should see the state of that pie...',
                 '<25>{#f/0}* Still, I have done my best to salvage it for you.'
              ]
            : [ '<25>{#f/1}* The stars do look pretty today, do they not?' ]),
         '<25>{#f/5}* ...',
         '<25>{#f/5}* I will be in the living room if you need me.'
      ],
      front4: () => [
         ...(world.postnoot
            ? [
                 '<25>{#p/toriel}{#f/0}* Oh, hello, little one.\n* You are up early.',
                 '<25>{#f/1}* Are you sure you slept for a long enough time?',
                 '<25>{#f/5}* ...',
                 world.nootflags.has('toriel') // NO-TRANSLATE

                    ? '<25>{#f/1}* The atmospheric system still does not seem to be fixed.'
                    : '<25>{#f/1}* The atmospheric system seems to be malfunctioning.',
                 '<25>{#f/1}* If you begin to feel weak, do not hesitate to return to bed.'
              ]
            : [ '<25>{#p/toriel}* Good morning, little one.' ]),
         '<25>{#f/5}* ...',
         ...(world.bullied
            ? [
                 '<25>* The Outlands have been unusually noisy today.',
                 '<25>* It seems a bully has been going around and causing trouble...',
                 '<25>* It would be best not to stray too far.'
              ]
            : [
                 '<25>* The Outlands have been unusually silent today.',
                 '<25>* I tried calling someone just now, but...',
                 '<25>* Nothing.'
              ]),
         ...(SAVE.data.n.state_wastelands_mash === 1
            ? [
                 world.bullied
                    ? '<26>{#f/3}* In other news, that little white dog has raided my kitchen again.'
                    : '<25>{#f/3}* Apart from the little white dog raiding my kitchen, that is.',
                 '<25>{#f/4}* You should see the state of that pie...',
                 '<25>{#f/0}* Still, I have done my best to salvage it for you.',
                 '<25>{#f/1}* I hope you like it...'
              ]
            : world.bullied || (16 <= outlandsKills() && SAVE.flag.n.genocide_twinkly < resetThreshold())
            ? []
            : [ '<25>{#f/1}* It is rather worrying...' ]),
         '<25>{#f/0}* Anyhoo, I will be in the living room if you need me.'
      ],
      goodbye1a: [ '<25>{#p/toriel}{#f/10}* ...', '<25>{#f/20}{|}* Come here- {%}' ],
      goodbye1b: [ '<25>{#p/toriel}{#f/9}* ...', '<25>{#f/19}{|}* Come here- {%}' ],
      goodbye2: [
         '<25>{#p/toriel}{#f/5}* I am sorry for what I have put you through, little one.',
         '<25>{#f/9}* I should have known that I could not keep you here forever.',
         '<25>{#f/5}* ... still, if you ever need someone to talk to...',
         '<25>{#f/1}* Feel free to call me at any time.',
         '<25>{#f/0}* As long as my phone can reach you, I will be there to pick up.'
      ],
      goodbye3: [
         '<25>{#p/toriel}{#f/5}* I am sorry for what I have put you through, little one.',
         '<25>{#f/9}* I should have known that I could not keep you here forever.',
         '<25>{#f/10}* ...',
         '<25>{#f/14}* Be good, alright?'
      ],
      goodbye4: [ '<25>{#p/toriel}{#f/1}* Be good, alright?' ],
      goodbye5a: [
         '<25>{#p/toriel}{#f/5}* ... hmm?\n* You changed your mind?',
         '<25>{#f/9}* ...',
         '<25>{#f/10}* Perhaps you really are different from the others.',
         '<25>{#f/0}* ... well then.',
         '<25>{#f/0}* I will finish up here, and meet you back at the house.',
         '<25>{#f/0}* Thank you for listening, my child.',
         '<25>{#f/0}* It means a lot to me.'
      ],
      goodbye5b: [
         '<25>{#p/toriel}{#f/5}* ... hmm?\n* You changed your mind?',
         '<25>{#f/10}* ...\n* Forgive me, my child.',
         '<25>{#f/9}* I might have lost it there for a moment.',
         '<25>{#f/0}* ... no matter.',
         '<25>{#f/0}* I will finish up here, and meet you back at the house.',
         '<25>{#f/0}* Thank you for listening, my child.',
         '<25>{#f/0}* It means a lot to me.'
      ],
      halo: {
         a: () => [ '<32>{#p/human}* (You got the Halo.)', choicer.create('* (Equip the Halo?)', 'Evet', 'Hayır') ],
         b: [ "<32>{#p/human}* (You're carrying too much to take that.)" ]
      },
      indie1: () => [
         ...([ 1, 5 ].includes(SAVE.data.n.state_wastelands_dummy) && SAVE.data.b.w_state_riddleskip
            ? [
                 '<25>{#p/toriel}{#f/5}* Teaching you thus far has been difficult, but...',
                 '<25>{#f/5}* Perhaps this exercise will help.'
              ]
            : [ '<26>{#p/toriel}* Alright.\n* It is time for your third and final lesson.' ]),
         '<25>{#f/1}* Do you think you can make it to the end of this room...',
         '<25>{#f/1}* ... all by yourself?',
         choicer.create('* (What do you say?)', 'Evet', 'Hayır')
      ],
      indie1a: () => [
         '<25>{#p/toriel}{#f/1}* Are you sure...?',
         '<25>{#f/0}* It is only a short distance away.',
         choicer.create('* (Change your mind?)', 'Evet', 'Hayır')
      ],
      indie1b: () => [
         '<25>{#p/toriel}{#f/5}* My child.',
         '<25>{#f/1}* It IS important to do things on your own, is it not?',
         '<32>{#p/basic}* If you refuse to change your mind here, Toriel may decide to take you home.',
         choicer.create('* (Change your mind?)', 'Evet', 'Hayır')
      ],
      indie2a: [ '<25>{#p/toriel}{#f/1}* Alright...', '<25>{#f/0}* Good luck!' ],
      indie2b: [ '<25>{#p/toriel}{#f/5}* ...', '<25>{#f/9}* ... I see.' ],
      indie2b1: [
         '<25>{#p/toriel}{#f/10}* Worry not, my child.',
         '<25>{#f/1}* If you truly do not wish to leave my side...',
         '<25>{#f/0}* I will guide you through the remainder of the Outlands.',
         '<25>{#f/5}* ...',
         '<25>{#f/5}* Take my hand, young one...',
         '<25>{#f/5}* It is time to go home.'
      ],
      indie2f: [ '<32>{#p/human}{#s/equip}* (You got the CELL.)' ],
      indie3a: [ '<25>{#p/toriel}* You did it!' ],
      indie3b: [
         '<25>{#p/toriel}{#f/3}* My child, what took you so long!?',
         '<25>{#f/4}* Did you get lost?',
         '<25>{#f/1}* ...\n* You DO seem alright...'
      ],
      indie4: () => [
         ...([ 1, 5 ].includes(SAVE.data.n.state_wastelands_dummy) && SAVE.data.b.w_state_riddleskip
            ? [
                 '<25>{#f/0}* I must admit, I am surprised you made it to the end.',
                 '<25>{#f/3}* Your behavior thus far has left me asking...',
                 '<25>{#f/4}* ... have you been attempting to mess with me this whole time?',
                 '<25>{#f/23}* To be blunt, I do not have time for such pointless riffraff.'
              ]
            : [
                 '<25>{#p/toriel}{#f/0}* Do not worry.\n* You were never in any real danger.',
                 '<25>{#f/0}* This was merely a test of your independence!',
                 '<25>{#f/1}* In truth, my child...'
              ]),
         '<25>{#f/5}* There are important errands I must run.',
         '<25>{#f/0}* While I am away, I expect you to be on your best behavior.',
         '<25>{#f/1}* The puzzles ahead are yet to be explained, and...',
         '<25>{#f/0}* Leaving the room on your own may prove to be dangerous.',
         '<25>{#f/10}* Here.\n* Take this CELL phone.',
         '<32>{#p/human}{#s/equip}* (You got the CELL.)',
         ...([ 1, 5 ].includes(SAVE.data.n.state_wastelands_dummy) && SAVE.data.b.w_state_riddleskip
            ? [
                 '<25>{#p/toriel}{#f/1}* If you need anything while I am away, please...',
                 '<25>{#f/0}* Do not hesitate to call me.',
                 '<25>{#f/5}* ...',
                 '<26>{#f/23}* And stay out of trouble.'
              ]
            : [
                 '<25>{#p/toriel}{#f/1}* If you need anything while I am away, please...',
                 '<25>{#f/0}* Do not hesitate to call me.',
                 '<25>{#f/5}* ...',
                 '<25>{#f/1}* Be good, alright?'
              ])
      ],
      indie5: [
         [
            '<32>{#s/phone}{#p/event}* Ring, ring...',
            '<25>{#p/toriel}* Hello!\n* This is Toriel.',
            '<25>* My errands are taking longer than I thought they would.',
            '<25>* You must wait a little longer.',
            '<25>{#f/1}* Thank you for being patient, my child...',
            '<25>{#f/0}* You are very good.'
         ],
         [
            '<32>{#s/phone}{#p/event}* Ring, ring...',
            '<25>{#p/toriel}* Hello...\n* This is Toriel.',
            '<25>{#f/1}* I found what I was looking for...',
            '<25>{#f/0}* But a small, white puppy snatched it away!\n* How odd.',
            '<25>{#f/1}* Do dogs even like flour?',
            '<25>{#f/0}* Err, that is an unrelated question, of course.',
            '<25>* It will take a little longer for me to return.',
            '<25>{#f/1}* Thank you again for being so patient...'
         ],
         [
            '<32>{#s/phone}{#p/event}* Ring, ring...',
            '<32>{#p/basic}* (...)',
            '<32>{#p/human}* (You hear heavy panting on the other end of the phone.)',
            '<32>{#s/bark}{#p/event}* Bark!\n{#s/bark}* Bark!',
            '<32>{#p/human}* (You hear a distant voice.)',
            '<25>{#p/toriel}{#f/2}* Stop, please!',
            '<32>{#s/bark}{#p/event}* Bark!\n{#s/bark}* Bark!',
            '<25>{#p/toriel}{#f/1}* Come back here with my cell phone!'
         ],
         [
            '<32>{#s/phone}{#p/event}* Ring, ring...',
            '<32>{#p/basic}* (...)',
            '<32>{#p/human}* (It sounds like a small, white dog is sleeping on the phone.)',
            '<32>{#p/basic}* (Snore... snore...)',
            '<32>{#p/human}* (You hear a distant voice.)',
            '<25>{#p/toriel}{#f/1}* Hellooo?\n* Little puppy...?',
            '<25>{#f/1}* Where are youuu?',
            '<25>{#f/0}* I will give you a nice pat on the head!',
            '<32>{#p/human}* (The snoring stops.)',
            '<25>{#p/toriel}* ... if you return with my cell phone.',
            '<32>{#p/human}* (The snoring resumes.)'
         ],
         [
            '<32>{#s/phone}{#p/event}* Ring, ring...',
            '<32>{#p/basic}* (...)',
            '<32>{#p/basic}* (Achoo!)',
            '<32>{#p/human}* (It sounds like a small, white dog sneezing in its sleep.)',
            '<25>* (You hear a distant voice.)',
            '<25>{#p/toriel}{#f/1}* Aha!\n* I heard that, you little white dog...',
            '<25>{#f/6}* Now I am going to find you!',
            '<32>{#p/human}* (The snoring stops.)\n* (The dog now seems to be on the run from something.)',
            '<25>{#p/toriel}{#f/8}* Hee hee, there is no escape!'
         ],
         [
            '<32>{#s/phone}{#p/event}* Ring, ring...',
            '<32>{#p/human}* (You hear a distant voice.)',
            '<25>{#p/toriel}{#f/1}* Hello...\n* This is... Toriel...',
            '<32>{#s/bark}{#p/event}* Bark!\n* Bark!',
            '<25>{#p/toriel}{#f/2}* No, bad puppy!',
            '<32>{#p/basic}* (Whimper... whimper...)',
            '<25>{#p/toriel}* There, there...\n* I will find another cell phone for you.',
            '<25>{#f/1}* Would that be alright?',
            '<32>{#p/basic}* (...)',
            '<32>{#s/bark}{#p/event}* Bark!',
            '<25>{#p/toriel}* Glad to hear it.',
            '<32>{#p/human}* (The dog could be heard walking away.)',
            '<25>{#p/toriel}* Please, forgive me for all of this nonsense.',
            '<25>{#f/1}* I will be back to pick you up shortly...'
         ]
      ],
      indie6: (early: boolean) => [
         '<32>{#s/phone}{#p/event}* Ring, ring...',
         ...([ 1, 5 ].includes(SAVE.data.n.state_wastelands_dummy) && SAVE.data.b.w_state_riddleskip
            ? [
                 early
                    ? '<25>{#p/toriel}{#g/torielTired}* ... already?'
                    : '<25>{#p/toriel}{#g/torielTired}* ... impatient, are we?',
                 '<25>{#f/9}* I really should not be surprised.',
                 '<25>{#f/5}* Just remember the dangers that lie ahead of you out there...',
                 '<25>{#f/1}* It would be a shame if you got hurt.'
              ]
            : [
                 '<25>{#p/toriel}* Hello?\n* This is Toriel.',
                 '<25>{#f/1}* You have not left the room, have you?',
                 '<25>{#f/0}* There are many dangers out there, and I do not want you to get hurt.',
                 '<25>{#f/1}* Take care of yourself, alright?'
              ])
      ],
      indie7: [ '<32>{#p/basic}* A few minutes later...' ],
      indie8: [
         '<25>{#p/toriel}* I have returned!',
         '<25>* Your patience thus far has been commendable.\n* Even I am impressed!',
         '<25>{#f/0}* Anyhoo.\n* It is time I took you home now.',
         '<25>{#f/1}* Please, allow me...'
      ],
      lobby_puzzle1: [
         '<25>{#p/toriel}{#f/0}* Welcome to our humble outpost, innocent one.',
         '<25>{#f/0}* There are many lessons that I must teach you about life here.',
         '<25>{#f/1}* First and foremost...',
         '<25>{#f/0}* Puzzles!',
         '<25>{#f/0}* Allow me to perform this quick demonstration.'
      ],
      lobby_puzzle2: [
         '<25>{#p/toriel}{#f/1}* It may seem strange to you now, but here on the outpost...',
         '<25>{#f/0}* Solving puzzles is a part of our daily routine.',
         '<25>{#f/0}* With time, and a little guidance, you will grow accustomed to them.'
      ],
      lobby_puzzle3: [ '<25>{#p/toriel}* When you are ready, we may proceed.' ],
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
            '<32>{#p/event}* Ring, ring...',
            3 <= SAVE.data.n.cell_insult
               ? '<25>{#p/toriel}* Hello, child.'
               : '<25>{#p/toriel}* Hello?\n* This is Toriel.',
            '<25>{#f/1}* For no reason in particular...',
            '<25>{#f/0}* Do you prefer cinnamon, or butterscotch?',
            choicer.create('* (Which do you prefer?)', 'Cinnamon', 'Bscotch'),
            3 <= SAVE.data.n.cell_insult
               ? '<25>{#p/toriel}{#f/0}* I see.'
               : '<25>{#p/toriel}* Oh, I see!\n* Thank you very much!'
         ],
         b: () => [
            '<32>{#p/event}* Ring, ring...',
            3 <= SAVE.data.n.cell_insult
               ? '<25>{#p/toriel}* Hello, child.'
               : '<25>{#p/toriel}* Hello?\n* This is Toriel.',
            [
               '<25>{#f/1}* You do not DISLIKE butterscotch, do you?',
               '<25>{#f/1}* You do not DISLIKE cinnamon, do you?'
            ][SAVE.data.n.choice_flavor],
            '<25>{#f/1}* I know what your preference is, but...',
            '<25>{#f/1}* Would you still be satisfied if it turned up on your plate?',
            choicer.create('* (What do you say?)', 'Evet', 'Hayır')
         ],
         b1: () => [
            3 <= SAVE.data.n.cell_insult
               ? '<25>{#p/toriel}{#f/0}* Got it.'
               : '<25>{#p/toriel}* Right, right, of course.',
            '<25>{#f/1}* Carry on, then...'
         ],
         b2: () => [
            '<25>{#p/toriel}{#f/5}* ...',
            '<25>{#f/0}* Well then.',
            '<25>{#f/1}* ...',
            3 <= SAVE.data.n.cell_insult
               ? '<25>{#f/0}* I will see what I can do.'
               : '<25>{#f/0}* I will call you back later, my child.'
         ],
         c: [
            '<32>{#p/event}* Ring, ring...',
            '<25>{#p/toriel}{#f/1}* You do not have any allergies, do you?',
            '<25>{#f/5}* ...',
            '<25>{#f/5}* I suppose humans cannot even be allergic to monster food.',
            '<25>{#f/0}* Hee hee.\n* Forget I asked!'
         ],
         d: [
            '<32>{#p/event}* Ring, ring...',
            '<25>{#p/toriel}{#f/1}* Hello, little one.',
            '<25>{#f/0}* I realize now that it has been a while since I cleaned up.',
            '<25>{#f/1}* There are likely plenty of things strewn about...',
            '<25>{#f/0}* You may pick them up if you like, but do not try to carry too much.',
            '<25>{#f/1}* What if you see something you really want?',
            '<25>{#f/0}* You will want to leave room in your pockets for that.'
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
            ? '<25>{#p/toriel}{#f/1}* My child, how did you get here!?'
            : '<25>{#p/toriel}{#f/1}* Ah... there you are.',
         '<25>* Are you alright?'
      ],
      return2a: () =>
         SAVE.data.n.cell_insult < 3
            ? [ '<25>{#p/toriel}* Not a scratch!\n* Impressive.' ]
            : [ '<25>{#p/toriel}{#f/10}* Not a scratch...\n* Very well.' ],
      return2b: () =>
         SAVE.data.n.cell_insult < 3
            ? [ '<25>{#p/toriel}{#f/4}* You look hurt...', '<25>{#f/10}* There, there, I will heal you.' ]
            : [ '<25>{#p/toriel}{#f/9}* You have been hurt.', '<25>{#f/10}* Please, allow me to heal your injuries.' ],
      return2c: [
         '<25>{#p/toriel}{#f/3}* ...',
         '<25>{#f/11}* Who did this to you?\n* Someone is going to answer for this.'
      ],
      return3: () => [
         '<25>{#p/toriel}* I apologize, young one.\n* It was foolish of me to leave you on your own.',
         ...(world.postnoot
            ? [
                 '<25>{#f/1}* ... is it just me, or is something wrong with the atmosphere?',
                 '<25>{#f/5}* Perhaps the system that provides it is not functioning properly.',
                 '<25>{#f/5}* ...',
                 '<25>{#f/0}* No matter.\n* I am sure it will be resolved shortly.'
              ]
            : []),
         '<25>{#f/1}* Come!\n* I have a surprise for you.'
      ],
      return4: () => [
         '<25>{#p/toriel}* Welcome to my parlor!',
         ...(3 <= SAVE.data.n.cell_insult
            ? [
                 '<25>{#f/1}* Can you smell...',
                 '<25>{#p/toriel}{#f/2}* ... oh, I forgot to check the oven!',
                 '<25>{#p/toriel}{#f/5}* I have been so pre- occupied with your previous behavior, I...',
                 '<25>{#p/toriel}{#f/1}* I must take care of this now, please do not wander off!'
              ]
            : [
                 '<25>{#f/1}* Can you smell that?',
                 ...(SAVE.data.b.snail_pie
                    ? [ '<25>{#f/0}* Surprise!\n* It is a homemade snail pie.' ]
                    : [
                         '<25>{#f/0}* Surprise!\n* It is a butterscotch- cinnamon pie.',
                         '<25>{#f/0}* I thought you might prefer that instead of snail pie for tonight.'
                      ]),
                 '<25>{#f/1}* Now, it has been a long time since I have cared for anyone...',
                 '<25>{#f/0}* But I still want you to have a nice time living here.',
                 '<25>{#f/0}* Follow me!\n* I have another surprise for you.'
              ])
      ],
      return5: [
         "<25>{#p/toriel}* Would you look at that!\n* It's a room of your very own.",
         '<25>{#f/1}* I hope you like it...'
      ],
      return6: [
         '<25>{#p/toriel}{#f/1}* Well, I have to go check on the pie.',
         '<25>{#f/0}* Please, make yourself at home!'
      ],
      runaway1: [
         [ '<25>{#p/toriel}{#f/1}* Should you not play at the house instead?', '<25>{#f/0}* Come now.' ],
         [ '<25>{#p/toriel}{#f/9}* Child, it is dangerous to play out here.', '<25>{#f/5}* Trust me.' ],
         [ '<26>{#p/toriel}{#f/5}* The gravity is low here.\n* You will float away.' ],
         [ '<25>{#p/toriel}{#f/5}* The atmopsheric system is weak here.\n* You will suffocate.' ],
         [ '<25>{#p/toriel}{#f/23}* There is really nothing for you to see here.' ],
         [ '<25>{#p/toriel}{#f/1}* Would you like to read a book with me?' ],
         [ '<25>{#p/toriel}{#f/1}* Would you like to revisit the other rooms in the Outlands?' ],
         [ '<25>{#p/toriel}{#f/5}* I will not allow you to endanger yourself.' ],
         [ '<25>{#p/toriel}{#f/3}* Do you expect me to do this all day?' ],
         [ '<25>{#p/toriel}{#f/4}* ...' ],
         [ '<25>{#p/toriel}{#f/17}* ...', '<25>{#f/15}* I do not like the game you are playing.' ],
         [ '<25>{#p/toriel}{#f/17}* ...' ]
      ],
      runaway2: [
         '<25>{#p/toriel}{#f/1}* Please come back to the house, little one...',
         '<25>{#f/0}* I have something to show you!'
      ],
      runaway3: [
         '<25>{#p/toriel}{#f/2}* Child, no!\n* It is not safe for you out here!',
         '<25>{#f/0}* Come. I have finished preparing breakfast.'
      ],
      runaway4: [ '<25>{#p/toriel}{#f/2}* Child!\n* What are you doing!?' ],
      runaway5: [
         '<25>{#p/toriel}{#f/1}* Do you not realize what would happen if you left here?',
         '<25>{#f/5}* I... I am sorry I did not pay more attention to you...',
         '<25>{#f/9}* Maybe if I had, you would not have run away...'
      ],
      runaway6: [
         '<25>{#g/torielStraightUp}* I must admit... I am afraid of leaving here myself.',
         '<25>{#f/9}* There are many dangers beyond which would threaten us both.',
         '<25>{#g/torielSincere}* I do want to protect you from them, but...',
         '<25>{#g/torielStraightUp}* If I follow you out of here, I would only put you in further danger.',
         '<25>{#f/9}* My presence would be seen as a threat.'
      ],
      runaway7: [
         '<25>{#p/toriel}{#f/5}* Please...',
         '<25>{#f/1}* Come back with me, and I promise to take care of you.',
         '<25>{#f/5}* I will do anything you ask, alright?',
         '<25>{#f/18}* Please... do not leave me like the others...'
      ],
      runaway7a: [
         '<25>{#p/toriel}{#f/18}* ...',
         '<25>{#g/torielCompassionSmile}* There, there, my child.\n* Everything will be alright now.',
         '<25>{#f/1}* Return to the house, and I will rejoin you soon.',
         '<25>{#f/5}* There is something I have to do here.'
      ],
      runaway7b: [
         '<25>{#p/toriel}{#f/21}* How pathetic...',
         '<25>* I cannot...\n* Even protect a single human child...',
         '<32>{#p/human}* (You hear footsteps fading into the distance.)'
      ],
      silencio: {
         a: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                       '<32>{#p/basic}{#n1}* Hey there.\n* Nice to see you back here.',
                       "<32>* I've decided to revisit this old stomping ground of mine...",
                       "<32>* Besides, it's quiet here.\n* Just like me.",
                       "<32>* Oh, and I've retired from working at the CORE.",
                       '<32>* You see, when I joined the engineering team...',
                       "<32>* I didn't realize I'd be called on for impromptu guard duty.",
                       '<32>* ... it would seem deception of the corporate variety is beyond even my foresight.'
                    ]
                  : SAVE.data.b.napsta_performance
                  ? [
                       '<32>{#p/basic}{#n1}* Hey there.\n* Nice to see you at the show.',
                       "<32>* The name's Silencio... but I'm sure you've heard that by now.",
                       '<32>* Everyone around here knows my name, even that DJ.',
                       '<32>* I once performed my own kind of musical here.',
                       '<32>* \"Silencio\'s Great Escape,\" it was called.',
                       '<32>* Once it was over, I was gone before the crowd could even catch their breath.'
                    ]
                  : [
                       '<32>{#p/basic}{#n1}* Hey there.\n* Nice to meet you.',
                       "<32>* The name's Silencio... well, that's what they call me, anyway.",
                       '<32>* You wanna know why they call me that?',
                       "<32>* I'm like a space ninja, silent as the most silent of stars.",
                       '<32>* I can slip out of any danger, no exceptions.',
                       "<32>* Don't believe me?\n* Try something funny, and you'll see how fast I run."
                    ],
            () =>
               SAVE.data.n.plot === 72
                  ? [
                       "<32>{#p/basic}{#n1}* Oh, yeah, I guess I'm free to leave the galaxy now.",
                       "<32>* ... but maybe I'll stay."
                    ]
                  : SAVE.data.b.napsta_performance
                  ? [
                       '<32>{#p/basic}{#n1}* You might even say, that performance of mine...',
                       '<32>* Was \"breathtaking.\"'
                    ]
                  : [
                       '<32>{#p/basic}{#n1}* What are you still talking to me for, huh?',
                       "<32>* I've already said everything I'm willing to."
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
         a: [ '<32>{#p/basic}* Later...' ],
         b: [
            '<32>{#p/napstablook}* hey everyone...',
            '<32>* this is a little tune i wrote a while ago...',
            "<32>* i've been experimenting with my style lately, so...",
            "<32>* hopefully, it's good enough for you all",
            '<32>* ...',
            '<32>* well, here we go...'
         ],
         c1: [ '<32>{*}{#p/basic}* Well, this is jazzy.{^30}{%}' ],
         c2: [
            '<25>{*}{#p/toriel}{#f/7}* Why has Napstablook never mentioned this??\n* This is good!{^30}{%}',
            "<32>{*}{#p/basic}* Yeah, maybe they're just shy.{^30}{%}"
         ],
         c3: [ '<32>{*}{#p/basic}* Ooh, bells ;){^30}{%}' ],
         c4: [ '<32>{*}{#p/basic}* Here comes the breakdown!{^30}{%}' ],
         c5: [ '<32>{*}{#p/basic}* Well, that was... something.{^30}{%}' ],
         d: [
            '<32>{#p/napstablook}* yeah, that was something',
            '<32>{#p/napstablook}* oh well...\n* i probably bored you guys...',
            '<32>{#p/napstablook}* sorry...'
         ],
         e: [
            '<25>{|}{#p/toriel}{#f/2}* No, wait!\n* That was actually...',
            "<32>{#p/basic}* I don't think they can hear you, Toriel.",
            '<25>{#p/toriel}{#f/9}* ...\n* They never do...'
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
         a: [ '<25>{#p/toriel}{#f/1}* Have you tried checking the terminal?' ],
         b: [ '<25>{#p/toriel}{#f/1}* The password terminal is right over there, little one.' ]
      },
      latetoriel1: [
         '<25>{#p/toriel}{#npc/a}{#f/2}* ...!',
         '<25>{#f/5}* What are you doing out here, my ch...',
         '<25>{#f/9}* ... child...',
         '<25>{#f/5}* I cannot care for you any longer, child.\n* Nor should I.',
         '<25>{#f/5}* You have places to be, things to see...',
         '<25>{#f/10}* Who am I to keep you from that?',
         '<25>{#f/9}* ...',
         '<25>{#f/5}* Please, carry on without me...',
         '<25>{#f/1}* ... I know you can do the right thing...'
      ],
      latetoriel2: [ '<25>{#p/toriel}{#npc/a}{#f/5}* ... go on...' ],
      
      lateasriel: () =>
         [
            [ '<25>{#p/asriel1}{#f/13}* Just leave me, Frisk...', "<25>{#f/15}* I can't come back with you, okay?" ],
            [
               "<25>{#p/asriel1}{#f/16}* I don't want to break their hearts all over again.",
               "<25>{#f/13}* It's better if they never see me at all."
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
                       '<32>{#p/basic}* \"Did you know that snails have a chainsaw-like tounge called a radula?\"',
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
                  '<32>{#p/human}* (You look to the circled paragraph.)',
                  '<32>{#p/toriel}{#f/21}* \"Question: Why did the skeleton want a friend?\"',
                  '<32>* \"Answer: Because he was feeling BONELY...\"',
                  '<32>{#p/basic}* The jokes continue from here at a similar caliber.'
               ],
               [
                  '<32>{#p/human}* (You look to another paragraph.)',
                  '<32>{#p/toriel}{#f/21}* \"Question: What\'s another name for a skeleton\'s vices?\"',
                  '<32>* \"Answer: HOLLOW pursuits...\"',
                  "<32>{#p/basic}* There's no sense in continuing to read these."
               ],
               [
                  '<32>{#p/human}* (You look to another paragraph.)',
                  '<32>{#p/toriel}{#f/21}* \"Question: How does a skeleton say goodbye?\"',
                  '<32>* \"Answer: See you to-MARROW...\"',
                  "<32>{#p/basic}* That one wasn't even REMOTELY funny."
               ],
               [
                  '<32>{#p/human}* (You look to another paragraph.)',
                  "<32>{#p/basic}* You can't get enough of these lame puns.",
                  '<32>{#p/toriel}{#f/21}* \"Question: Why did the skeleton drool in their sleep?\"',
                  '<32>* \"Answer: Because they were having a FEMUR dream...\"',
                  '<32>{#p/basic}* This is getting old...'
               ],
               [
                  '<32>{#p/human}* (You look to another paragraph.)',
                  "<32>{#p/basic}* You still can't get enough of these lame puns.",
                  '<32>{#p/toriel}{#f/21}* \"Question: What does a skeleton say to start a fight?\"',
                  '<32>* \"Answer: I\'ve got a BONE to pick with you...\"',
                  "<32>{#p/basic}* Seriously?\n* That wasn't even a pun!"
               ],
               [
                  '<32>{#p/human}* (You look to another paragraph.)',
                  "<32>{#p/basic}* We're losing brain cells here...",
                  "<32>{#p/toriel}{#f/21}* \"'What's up stairs?' asked the skeleton.\"",
                  '<32>* \"... the stairs did not reply.\"',
                  '<32>{#p/basic}* ...\n* I have no words.'
               ],
               [
                  '<32>{#p/human}* (You look to the final paragraph.)',
                  "<32>{#p/basic}* Huh?\n* This one's not a joke...",
                  '<32>{#p/toriel}{#f/21}* \"A human has arrived in the Outlands today.\"',
                  '<32>* \"I do trust that Sans would look after them, but...\"',
                  '<32>* \"I would rather not force him to do so.\"',
                  '<32>* \"Besides, can one royal sentry really protect them from the rest of the outpost?\"',
                  '<32>* \"Hopefully those kinds of questions will soon be pointless.\"',
                  '<32>{#p/basic}* ...'
               ],
               [ '<32>{#p/human}* (There are no more written entries here.)' ]
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
         "<20>{#f/5}Şu kalbi görüyor musun? O senin RUHun, oluşumunun mutlak sonucu!",
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
      twinkly19: [ '<20>{#p/toriel}What a terrible creature, torturing such a poor, innocent youth...' ],
      twinkly20: [
         '<20>Have no fear, little one.',
         '<20>I am {@fill=#003cff}TORIEL{@fill=#000}, overseer of the {@fill=#f00}OUTLANDS{@fill=#000}.',
         '<20>I come by every day to check for those who have been stranded here.',
         '<20>Follow me, child.\nThere is much I intend to teach you.'
      ],
      twinkly21: [
         '<25>{#p/toriel}{#f/1}* Oh my!\n* Where did you come from, little one?',
         '<25>{#f/1}* Are you injured?',
         '<25>{#f/0}* ...\n* Forgive me for asking so many questions.',
         '<25>{#f/0}* I am {@fill=#003cff}TORIEL{@fill=#fff}, overseer of the {@fill=#f00}OUTLANDS{@fill=#fff}.',
         '<26>{#f/0}* I come by every day to check for those who\n  have been stranded here.',
         '<25>{#f/0}* Follow me, child.\n* There is much I intend to teach you.'
      ],
      twinkly22: [ '<25>{#f/0}* This way.' ],
      w_coffin0: () => [
         '<32>{#p/human}* (You feel it would be best to leave this be.)',
         ...(SAVE.data.b.svr ? [ '<25>{#p/asriel1}{#f/13}* ...' ] : [])
      ],
      w_coffin1: () => [
         '<32>{#p/basic}* This coffin is very old.\n* There is nothing remarkable about it.',
         ...(world.goatbro && SAVE.flag.n.ga_asrielCoffin++ < 1
            ? [
                 '<25>{#p/asriel2}{#f/13}* Oh, look at that.\n* They made one just for you, $(name).',
                 '<25>{#p/asriel2}{#f/5}* How touching.'
              ]
            : [])
      ],
      w_coffin2: pager.create(
         0,
         () => [
            '<32>{#p/basic}* This coffin dates back to December 251X.',
            '<32>* There is an old record-keeping manifest stashed next to it...',
            choicer.create('* (Access the manifest?)', 'Evet', 'Hayır')
         ],
         () => [
            '<32>{#p/human}* (You once again pick up the manifest.)',
            choicer.create('* (Access the manifest?)', 'Evet', 'Hayır')
         ]
      ),
      w_coffin3: () => [ choicer.create('* (Read the next page?)', 'Evet', 'Hayır') ],
      w_coffin4: [ '<32>{#p/human}* (But there were no further pages to be read.)' ],
      w_coffin5: [ '<32>{#p/human}* (You put the manifest back where it belongs.)' ],
      w_dummy1: () =>
         SAVE.data.b.svr
            ? [ '<32>{#p/human}* (You place your hands on the dummy.)\n* (It seems very worn out.)' ]
            : [ '<32>{#p/basic}* A training dummy, circa 251X.\n* CITADEL standard-issue.' ],
      wonder1: [
         '<32>{#p/basic}* Can you hear it?\n* The song of the stars?',
         "<32>* At certain places on the outpost, like this one... it's there.",
         '<32>* You just have to be listening for it.',
         '<32>* Pretty cool, right?'
      ]
   },

   b_group_outlands: {
      froggitWhimsun: [ '<32>{#p/story}* Space frogs and Starflies!\n* Or something of the like.' ],
      froggitWhimsun2a: [ '<32>{#p/story}* Space frogs...?' ],
      froggitWhimsun2b: [ '<32>{#p/story}* Starflies...?' ],
      looxMigospWhimsun: [ "<32>{#p/story}* It's the troublesome trio!" ],
      looxMigospWhimsun2: [ '<32>{#p/story}* The trio has become a duo.' ],
      looxMigospWhimsun3: [ '<32>{#p/story}* Only one remains.' ],
      moldsmalMigosp: [ '<32>{#p/story}* Silente and company present themselves!' ]
   },

   b_opponent_froggit: {
      act_check: [ '<32>{#p/story}* FROGGIT - ATK 4 DEF 5\n* Life is difficult for this monster.' ],
      act_check2: [ '<32>{#p/story}* FROGGIT - ATK 4 DEF 5\n* Life is getting better for this monster.' ],
      act_check3: [ "<32>{#p/story}* FROGGIT - ATK 4 DEF 5\n* Life just doesn't seem to get easier for this monster." ],
      act_check4: [ '<32>{#p/story}* FROGGIT - ATK 4 DEF 5\n* Life is very confusing for this monster.' ],
      act_check5: [ '<32>{#p/story}* FROGGIT - ATK 4 DEF 5\n* Life seems to be very lovely for this monster.' ],
      act_threat: [
         '<32>{#p/human}* (You threaten Froggit.)',
         "<32>{#p/basic}* Froggit doesn't understand what you said..."
      ],
      act_threat2: [
         '<32>{#p/human}* (You threaten Froggit again.)',
         "<32>{#p/basic}* Froggit recalls the previous threat and decides it's time to run away."
      ],
      act_compliment: [
         '<32>{#p/human}* (You compliment Froggit.)',
         "<32>{#p/basic}* Froggit doesn't understand what you said..."
      ],
      act_flirt: [
         '<32>{#p/human}* (You flirt with Froggit.)',
         "<32>{#p/basic}* Froggit doesn't understand what you said..."
      ],
      act_translate0: [ "<32>{#p/human}* (But you haven't said anything to translate yet.)" ],
      act_translate1: [
         '<32>{#p/human}* (You translate what you said.)\n* (Froggit seems to understand you now.)',
         '<32>{#p/basic}* Froggit is flattered.'
      ],
      act_translate1x: [
         '<32>{#p/human}* (You translate what you said.)\n* (Froggit seems to understand you now.)',
         '<32>{#p/basic}* Froggit is hesitant to continue this battle.'
      ],
      act_translate1y: [
         '<32>{#p/human}* (You translate what you said.)\n* (Froggit seems to understand you now.)',
         '<32>* Thoroughly threatened, Froggit runs away!'
      ],
      act_translate1z: [
         '<32>{#p/human}* (You translate what you said.)\n* (Froggit seems to understand you now.)',
         '<32>{#p/basic}* Froggit shows no sign of fear.'
      ],
      act_translate2: [
         '<32>{#p/human}* (You translate what you said.)\n* (Froggit seems to understand you now.)',
         '<32>{#p/basic}* Froggit is blushing, if only on the inside.'
      ],
      confuseText: [ '<08>{#p/basic}{~}Ribbit, ribbit?' ],
      flirtText: [ '<08>{#p/basic}{~}(Blushes deeply.)\nRibbit..' ],
      idleText1: [ '<08>{#p/basic}{~}Ribbit, ribbit.' ],
      idleText2: [ '<08>{#p/basic}{~}Croak, croak.' ],
      idleText3: [ '<08>{#p/basic}{~}Hop, hop.' ],
      idleText4: [ '<08>{#p/basic}{~}Meow.' ],
      mercyStatus: [ '<32>{#p/story}* Froggit seems reluctant to fight you.' ],
      name: '* Froggit',
      meanText: [ '<08>{#p/basic}{~}(Shiver, shake.)\nRibbit..' ],
      niceText: [ '<08>{#p/basic}{~}(Blushes softly.)\nRibbit..' ],
      perilStatus: [ '<32>{#p/story}* Froggit is trying to run away.' ],
      status1: [ '<32>{#p/story}* Froggit hops near!' ],
      status2: [ '<32>{#p/story}* The battlefield is filled with the smell of crystherium utilia.' ],
      status3: [ "<32>{#p/story}* Froggit doesn't seem to know why it's here." ],
      status4: [ '<32>{#p/story}* Froggit hops to and fro.' ]
   },
   b_opponent_whimsun: {
      act_check: [ '<32>{#p/story}* FLUTTERLYTE - ATK 5 DEF 0\n* This monster has only just learned how to fly...' ],
      act_check2: [ '<32>{#p/story}* FLUTTERLYTE - ATK 5 DEF 0\n* This monster wishes it had stayed on the ground.' ],
      act_console: [
         '<32>{#p/human}* (You help Flutterlyte fly higher into the air.)',
         '<32>{#p/basic}* Flutterlyte thanks you, and flies away...'
      ],
      act_flirt: [
         '<32>{#p/human}* (You flirt with Flutterlyte.)',
         '<32>{#p/basic}* Unable to handle your compliment, Flutterlyte bursts into tears and flies away...'
      ],
      act_terrorize: [
         '<32>{#p/human}* (You weep and wail and gnash your teeth.)',
         '<32>{#p/basic}* Flutterlyte panicks and flies away...'
      ],
      idleTalk1: [ '<08>{#p/basic}{~}Why is this so hard..' ],
      idleTalk2: [ '<08>{#p/basic}{~}Please help me..' ],
      idleTalk3: [ "<08>{#p/basic}{~}I'm scared.." ],
      idleTalk4: [ "<08>{#p/basic}{~}I can't do this.." ],
      idleTalk5: [ '<08>{#p/basic}{~}\x00*sniff sniff*' ],
      name: '* Flutterlyte',
      perilStatus: [ '<32>{#p/story}* Flutterlyte is barely keeping itself in the air.' ],
      status1: [ '<32>{#p/story}* Flutterlyte comes forth!' ],
      status2: [ '<32>{#p/story}* Flutterlyte continues to mutter apologies.' ],
      status3: [ '<32>{#p/story}* Flutterlyte hovers meekly.' ],
      status4: [ '<32>{#p/story}* The smell of fresh peaches permeates the air.' ],
      status5: [ '<32>{#p/story}* Flutterlyte is hyperventilating.' ],
      status6: [ '<32>{#p/story}* Flutterlyte avoids eye contact.' ]
   },
   b_opponent_loox: {
      act_check: [ '<32>{#p/story}* OCULOUX - ATK 6 DEF 6\n* Staring contest master.\n* Family name: Eyewalker' ],
      act_check2: [
         "<32>{#p/story}* OCULOUX - ATK 6 DEF 6\n* This bully is trying very hard to pretend it's not flattered."
      ],
      act_check3: [ '<32>{#p/story}* OCULOUX - ATK 6 DEF 6\n* This monster is honored to be in your line of sight.' ],
      act_dontpick: [
         '<32>{#p/human}* (You stare at Oculoux.)\n* (Oculoux stares back harder.)',
         "<32>{#p/human}* (Oculoux's eye becomes increasingly strained, and eventually...)",
         '<32>{#p/human}* (... Oculoux bows.)'
      ],
      act_flirt: [ '<32>{#p/human}* (You flirt with Oculoux.)' ],
      act_pick: [ '<32>{#p/human}* (You rudely lecture Oculoux about staring at people.)' ],
      checkTalk1: [ '<08>{#p/basic}{~}Do you dare to stare?' ],
      dontDeny1: [ '<08>{#p/basic}{~}Look who changed their mind.' ],
      dontTalk1: [ '<99>{#p/basic}{~}The gaze\nis\nstrong\nwith\nthis one.' ],
      flirtDeny1: [ '<08>{#p/basic}{~}How tsundere of you.' ],
      flirtTalk1: [ '<08>{#p/basic}{~}What? N-no way!' ],
      hurtStatus: [ '<32>{#p/story}* Oculoux is watering.' ],
      idleTalk1: [ "<08>{#p/basic}{~}I've got my eye on you." ],
      idleTalk2: [ "<08>{#p/basic}{~}Don't tell me what to do." ],
      idleTalk3: [ '<08>{#p/basic}{~}Staring is caring.' ],
      idleTalk4: [ '<08>{#p/basic}{~}What an eyesore.' ],
      idleTalk5: [ '<08>{#p/basic}{~}How about a staring contest?' ],
      name: '* Oculoux',
      pickTalk1: [ '<08>{#p/basic}{~}How dare you question our way of life!' ],
      spareStatus: [ "<32>{#p/story}* Oculoux doesn't care about fighting anymore." ],
      status1: [ '<32>{#p/story}* A pair of Oculoux walked in!' ],
      status2: [ '<32>{#p/story}* Oculoux is staring right through you.' ],
      status3: [ '<32>{#p/story}* Oculoux gnashes its teeth.' ],
      status4: [ '<32>{#p/story}* Smells like eyedrops.' ],
      status5: [ '<32>{#p/story}* Oculoux has gone bloodshot.' ],
      status6: [ '<32>{#p/story}* Oculoux is gazing at you.' ],
      status7: [ '<32>{#p/story}* Oculoux is now alone.' ]
   },
   b_opponent_migosp: {
      act_check: [ "<32>{#p/story}* SILENTE - ATK 7 DEF 5\n* It seems evil, but it's just with the wrong crowd..." ],
      act_check2: [ '<33>{#p/story}* SILENTE - ATK 7 DEF 5\n* Now alone, it joyfully expresses itself through dance.' ],
      act_check3: [ '<32>{#p/story}* SILENTE - ATK 7 DEF 5\n* It seems comfortable with you.\n* VERY comfortable.' ],
      act_check4: [ "<32>{#p/story}* SILENTE - ATK 7 DEF 5\n* Despite its tough act, it's clearly in pain..." ],
      act_flirt: [ '<32>{#p/human}* (You flirt with Silente.)' ],
      flirtTalk: [ '<08>{#p/basic}{~}Hiya~' ],
      groupInsult: [ "<32>{#p/human}* (You try insulting Silente, but it's too focused on the others.)" ],
      groupStatus1: [ '<32>{#p/story}* Silente is whispering to the others.' ],
      groupStatus2: [ "<32>{#p/story}* It's starting to smell like a roach motel." ],
      groupTalk1: [ '<08>{#p/basic}FILTHY SINGLE MINDER\n..' ],
      groupTalk2: [ '<08>{#p/basic}OBEY THE OVERMIND\n..' ],
      groupTalk3: [ '<08>{#p/basic}LEGION! WE ARE LEGION!' ],
      groupTalk4: [ '<08>{#p/basic}HEED THE SWARM\n..' ],
      groupTalk5: [ '<08>{#p/basic}IN UNISON, NOW\n..' ],
      groupTalk6: [ "<08>{#p/basic}I DON'T CARE." ],
      name: '* Silente',
      perilStatus: [ '<32>{#p/story}* Silente refuses to give up.' ],
      soloInsult: [ "<32>{#p/human}* (You try insulting Silente, but it's too happy to care.)" ],
      soloStatus: [ "<32>{#p/story}* Silente doesn't have a care in the cosmos." ],
      soloTalk1: [ "<08>{#p/basic}{~}Bein' me is the best!" ],
      soloTalk2: [ '<08>{#p/basic}{~}La la~ Just be your- self~' ],
      soloTalk3: [ "<08>{#p/basic}{~}Nothin' like alone time!" ],
      soloTalk4: [ '<08>{#p/basic}{~}Mmm, cha cha cha!' ],
      soloTalk5: [ '<08>{#p/basic}{~}Swing your arms, baby~' ]
   },
   b_opponent_mushy: {
      act_challenge: [
         '<32>{#p/human}* (You challenge Mushy to a duel.)',
         "<33>{#p/story}* Mushy's SPEED up for this turn!"
      ],
      act_check: [ '<32>{#p/story}* MUSHY - ATK 6 DEF 6\n* Huge fan of space cowboys.\n* Gunslinger.' ],
      act_check2: [ '<32>{#p/story}* MUSHY - ATK 6 DEF 6\n* Huge fan of space cowboys.\n* Even the sexy ones.' ],
      act_check3: [ '<32>{#p/story}* MUSHY - ATK 6 DEF 6\n* After giving it your all, this gunslinger is impressed.' ],
      act_flirt: [ '<32>{#p/human}* (You flirt with Mushy.)' ],
      act_taunt: [ '<32>{#p/human}* (You taunt Mushy.)' ],
      challengeStatus: [ '<32>{#p/story}* Mushy awaits your next challenge.' ],
      challengeTalk1: [ "<08>{#p/basic}{~}Let's see what you got." ],
      challengeTalk2: [ '<08>{#p/basic}{~}Think you can take me?' ],
      flirtStatus1: [ '<32>{#p/story}* Mushy, the confused and the aroused.' ],
      flirtTalk1: [ '<08>{#p/basic}{~}H-hey, knock it off!' ],
      hurtStatus: [ '<32>{#p/story}* Mushy makes a last stand.' ],
      idleTalk1: [ '<08>{#p/basic}{~}Bang!\nBang!\nBang!' ],
      idleTalk2: [ '<08>{#p/basic}{~}Saddle up!' ],
      idleTalk3: [ "<08>{#p/basic}{~}All in a day's." ],
      name: '* Mushy',
      spareStatus: [ '<32>{#p/story}* Mushy bows out of respect.' ],
      status1: [ '<32>{#p/story}* Mushy stormed in!' ],
      status2: [ '<32>{#p/story}* Mushy adjusts their stance.' ],
      status3: [ '<32>{#p/story}* Mushy is preparing for a grand standoff.' ],
      status4: [ '<32>{#p/story}* Mushy reaches for their holster.' ],
      status5: [ '<32>{#p/story}* Smells like petrichor.' ],
      tauntStatus1: [ "<32>{#p/story}* Mushy pretends they aren't bothered by your taunts." ],
      tauntTalk1: [ "<08>{#p/basic}{~}As if that'll work on me." ]
   },
   b_opponent_napstablook: {
      act_check: [ "<32>{#p/story}* NAPSTABLOOK - ATK 10 DEF 255\n* It's Napstablook." ],
      act_check2: [
         "<32>{#p/story}* NAPSTABLOOK - ATK 10 DEF 255\n* It doesn't seem like they want to be here anymore."
      ],
      act_check3: [ '<32>{#p/story}* NAPSTABLOOK - ATK 10 DEF 255\n* Hopeful, for the first time in a while...' ],
      act_check4: [ '<32>{#p/story}* NAPSTABLOOK - ATK 10 DEF 255\n* The romantic tension is at an all-time high.' ],
      awkwardTalk: [ '<11>{#p/napstablook}{~}uh...', '<11>{#p/napstablook}{~}okay, i guess...?' ],
      checkTalk: [ "<11>{#p/napstablook}{~}that's me..." ],
      cheer0: [ '<32>{#p/human}* (You try to console Napstablook.)' ],
      cheer1: [ '<32>{#p/human}* (Napstablook\'a sabırla gülümsüyorsun.)' ],
      cheer2: [ '<32>{#p/human}* (Napstablook\'a ufak bir şaka söylüyorsun.)' ],
      cheer3: [ "<32>{#p/human}* (Napstablook'un silindir şapkasına hayranlığını gösteriyorsun.)" ],
      cheerTalk1: [ '<11>{#p/napstablook}{~}...?' ],
      cheerTalk2: [ '<11>{#p/napstablook}{~}heh heh...' ],
      cheerTalk3: [
         '<11>{*}{#p/napstablook}{~}let me {#x1}try...{^20}{#x2}{^20}{%}',
         "<11>{*}{#p/napstablook}{~}i call it {#x3}'dapper blook'{^40}{%}",
         '<11>{*}{#p/napstablook}{~}do you like it?{^40}{%}'
      ],
      cheerTalk4: [ '<11>{#p/napstablook}{~}oh gee.....' ],
      consoleTalk1: [ '<11>{#p/napstablook}{~}yeah, yeah...' ],
      consoleTalk2: [ '<11>{#p/napstablook}{~}not buying it...' ],
      consoleTalk3: [ "<11>{#p/napstablook}{~}you're not sorry..." ],
      deadTalk: [
         "<11>{#p/napstablook}{~}umm... you do know you can't kill ghosts, right...",
         "<11>{~}we're sorta incorporeal and all",
         "<11>{~}i was just lowering my hp because i didn't want to be rude",
         '<11>{~}sorry... i just made this more awkward...',
         '<11>{~}pretend you beat me...',
         '<11>{~}ooooooooo'
      ],
      flirt1: [ '<32>{#p/human}* (You flirt with Napstablook.)' ],
      flirt2: [ '<32>{#p/human}* (You try your best pickup line on Napstablook.)' ],
      flirt3: [ '<32>{#p/human}* (You give Napstablook a heartfelt compliment.)' ],
      flirt4: [ '<32>{#p/human}* (You reassure Napstablook of your feelings towards them.)' ],
      flirtTalk1: [ "<11>{#p/napstablook}{~}i'd just weigh you down" ],
      flirtTalk2: [ "<11>{#p/napstablook}{~}oh.....\ni've heard that one....." ],
      flirtTalk3: [ '<11>{#p/napstablook}{~}uh... you really think so?' ],
      flirtTalk4: [ "<11>{#p/napstablook}{~}oh, you're serious...", '<11>{~}oh no.....' ],
      idleTalk1: [ "<11>{#p/napstablook}{~}i'm fine, thanks" ],
      idleTalk2: [ '<11>{#p/napstablook}{~}just pluggin along...' ],
      idleTalk3: [ '<11>{#p/napstablook}{~}just doing my thing...' ],
      insultTalk1: [ '<11>{#p/napstablook}{~}i knew it...' ],
      insultTalk2: [ '<11>{#p/napstablook}{~}whatever...' ],
      insultTalk3: [ '<11>{#p/napstablook}{~}say what you will...' ],
      insultTalk4: [ '<11>{#p/napstablook}{~}let it all out...' ],
      name: '* Napstablook',
      silentTalk: [ '<11>{#p/napstablook}{~}...' ],
      sincere: [ "<32>{#p/human}* (You flirtatiously comment on Napstablook's top hat.)" ],
      sincereTalk: [ '<11>{#p/napstablook}{~}heh... thanks' ],
      status1: [ '<32>{#p/story}* Here comes Napstablook.' ],
      status2: [ '<32>{#p/story}* Napstablook looks just a little better.' ],
      status3: [ '<32>{#p/story}* Napstablook wants to show you something.' ],
      status3a: [ '<32>{#p/story}* Napstablook awaits your reply.' ],
      status4: [ "<32>{#p/story}* Napstablook's eyes are glistening." ],
      status5: [ '<32>{#p/story}* Napstablook is clearly not sure how to handle this.' ],
      status5a: [ '<32>{#p/story}* Napstablook is questioning their very being.' ],
      status6: [ '<32>{#p/story}* Napstablook is biding their time.' ],
      status7: [ '<32>{#p/story}* Napstablook is waiting for your next move.' ],
      status8: [ '<32>{#p/story}* Napstablook is staring off into the distance.' ],
      status9: [ "<32>{#p/story}* Napstablook is wishing they weren't here." ],
      status10: [ '<32>{#p/story}* Napstablook is trying their best to ignore you.' ],
      suck: [ '<32>{#p/human}* (You tell Napstablook their hat sucks bad.)' ],
      threat: [ '<32>{#p/human}* (You threaten Napstablook.)' ]
   },
   b_opponent_toriel: {
      spannerText: [ '<32>{#p/human}* (You throw the spanner.)\n* (Toriel picks it up and returns it to you.)' ],
      spannerTalk: [ '<11>{#p/toriel}{#f/22}Bu hiçbir işe yaramayacak, çocuğum.' ],
      spannerTalkRepeat: [ '<11>{#p/toriel}{#f/22}...' ],
      act_check: [ '<32>{#p/story}* TORIEL - ATK 80 DEF 80\n* Knows best for you.' ],
      act_check2: [ '<32>{#p/story}* TORIEL - ATK 80 DEF 80\n* Seems to be holding back.' ],
      act_check3: [ '<32>{#p/story}* TORIEL - ATK 80 DEF 80\n* Looks pre-occupied.' ],
      act_check4: [ '<32>{#p/story}* TORIEL - ATK 80 DEF 80\n* Just wants the best for you.' ],
      act_check5: [ '<32>{#p/story}* TORIEL - ATK 80 DEF 80\n* Thinks you are \"adorable.\"' ],
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
         '<11>{#v/1}{#i/3}{#x3}{@random=1.1/1.1}Bu gerçekleştiğinde, benim RUH\'umu almalısın...',
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
      status1: [ '<32>{#p/story}* Toriel now stands before you.' ],
      status2: [ '<32>{#p/story}* Toriel prepares a magical attack.' ],
      status3: [ '<32>{#p/story}* Toriel is acting aloof.' ],
      status4: [ '<32>{#p/story}* Toriel is looking through you.' ],
      status5: [ '<32>{#p/story}* ...' ],
      assistStatus: [ '<32>{#p/basic}* Başka bir yol olmalı...' ],
      talk1: [ '<32>{#p/human}* (You ask Toriel to let you through.)\n* (No effect.)' ],
      talk2: [ "<32>{#p/human}* (You ask Toriel why she's really doing this.)\n* (She winces briefly.)" ],
      talk3: [ '<32>{#p/human}* (You begged Toriel to stop.)\n* (She hesitates.)' ],
      talk4: [
         '<32>{#p/human}* (You once again begged Toriel to stop.)',
         '<32>{#p/basic}* ... perhaps there is too much at stake for her.'
      ],
      talk5: [ '<32>{#p/human}* (You yell at Toriel.)\n* (She closes her eyes and takes a deep breath.)' ],
      talk6: [
         '<32>{#p/human}* (You once again yell at Toriel.)',
         "<32>{#p/basic}* ... perhaps talking won't do anymore good."
      ],
      talk7: [ "<32>{#p/human}* (But you couldn't think of anything else to say.)" ],
      talk8: [ '<32>{#p/human}* (But there was no sense in doing that now.)' ],
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
         '<25>{#f/0}* Gördüğün şeylerin çoğunu ben inşa ettim ya da en azından yapılmasına yardımcı oldum.'
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
         '<32>{#p/human}* (You drank the Water.)',
         ...(SAVE.data.b.ufokinwotm8 ? [] : [ "<33>{#p/human}* (You're filled with hydration.)" ]) 
      ]
   },
   i_chocolate: {
      battle: {
         description: 'A well-deserved chocolate bar.',
         name: 'Çikolata'
      },
      drop: () => [
         '<32>{#p/human}* (You threw away the Chocolate Bar.)',
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
         '<32>{#p/human}* (You threw away the Fizzli Soda.)',
         ...(SAVE.data.b.svr || world.darker ? [] : [ '<32>{#p/basic}* Good riddance.' ])
      ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ '<32>{#p/human}* (8 HP.)' ]
            : [ '<32>{#p/basic}* \"Fizzli Soda\" Heals 8 HP\n* A dark, sickly yellow liquid.' ],
      name: 'Fizzli Soda',
      use: () => [
         '<32>{#p/human}* (You drank the Fizzli Soda.)',
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
         name: 'Spanner'
      },
      drop: [ '<32>{#p/human}* (You throw away the Rusty Spanner.)' ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* (A trusty tool forged from beyond the galaxy's edge.)" ]
            : [ '<32>{#p/basic}* A rusty old wrench.' ],
      name: 'Rusty Spanner',
      use: () => [
         ...(battler.active && battler.alive[0].opponent.metadata.reactSpanner
            ? []
            : [ '<32>{#p/human}* (You toss the spanner into the air.)\n* (Nothing happens.)' ])
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
         '<32>{#p/human}* (You threw away the Sizzli Steak.)',
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
         '<25>{#f/0}* ... bu da gelen araçların her zaman bu vektör üzerinde uçmasını sağlıyordur.'
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
         '<25>{#f/3}* Aralarından biri doğrudan güvenlik kalkanına koşmayı bile denemişti...',
         '<25>{#f/0}* ... şifa büyüsü kullanmanın gerekli kaldığını söylemek yeterli olacaktır.'
      ],
      w_tutorial: [
         '<25>{#p/toriel}* Eğer favorim olan bulmaca bu değil ise, ne olabileceğini bilmiyorum!',
         '<25>* İşbirliğini öğretme şekli en değerli gördüğüm yanıdır.',
         '<25>{#f/1}* Zira hayalim olan işim öğretmen olmak olduğu için...',
         '<25>{#f/0}* Her zaman bunun gibi önemli dersleri aktarmanın yollarını arıyorum.'
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
                 '<25>{#p/toriel}{#f/1}* Outlands\'in gözetmeni olarak kendime görev edindiğim bir başka şey...',
                 '<25>{#f/0}* Diğer canavarların sana saldırmasını engellemektir.',
                 '<25>{#f/0}* Bu konuda hem onlar hem de ben ortak bir anlayışa sahibiz.',
                 '<25>{#f/0}* İşte bu yüzden Froggit oradan doğruca ayrılmıştı.'
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
         '<25>{#f/0}* Yayından kalkmış bir çizgi roman serisinin eski baskıları satılıyor.',
         '<25>{#f/0}* Belki sıkıldıysan bir tane satın alabilirsin.',
         '<25>{#f/0}* Senin yaşındaki çocuklar bu tür şeylere oldukça düşkündür!'
      ],
      w_mouse: [
         '<25>{#p/toriel}{#f/1}* İlke gereği önemli bulduğum bir şey var ise...',
         '<25>{#f/0}* Bu, durup dinlenmeye yönelik bir odanın tahsis edilmesidir.',
         '<25>{#f/0}* Kendi hayatımda bu tür molaların faydalı olduğunu sık sık görüyorum.',
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
         '<25>{#p/toriel}{#f/0}* Aktivite odası.\n* Orada her türlü gösteriye ev sahipliği yapıyoruz.',
         '<25>{#f/0}* Drama, dans geceleri...\n* Ve en önemlisi, sanatlar.',
         '<25>{#f/0}* Diğerlerinin kendilerini ifade etmelerini görmek her zaman iyidir.',
         '<25>{#f/1}* Bir keresinde tam o odada bir komedi gösterisine katılmıştım.',
         '<25>{#f/0}* Hayatımda hiç bu kadar çok gülmemiştim!'
      ],
      w_pacing: () => [
         SAVE.data.b.toriel_twinkly
            ? '<25>{#p/toriel}{#f/0}* Duydum ki buradan birisi o konuşan yıldız ile \"arkadaş\" olmuş.'
            : '<25>{#p/toriel}{#f/0}* Duydum ki buradan birisi bir konuşan yıldız ile \"arkadaş\" olmuş.',
         '<25>{#f/1}* Froggit\'lerden birisi, sanıyorum ki...?',
         "<25>{#f/1}* O canavarların güvenliği için endişelendiğimi söylemek...",
         '<25>{#f/5}* Çok hafif kalan bir ifade olurdu.'
      ],
      w_junction: [
         '<25>{#p/toriel}{#f/1}* Kesişme odası...',
         '<25>{#f/0}* Geçmişte, burada bir tür topluluk alanı planlamıştık.',
         '<25>{#f/0}* Outlands\'e gelen ziyaretçiler sıcak, misafirperver bir atmosferle karşılaşırlardı.',
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
         '<25>{#f/0}* Oradaki dükkan ve işletmeler çoğunlukla sadece yetişkinlere yönelik.'
      ],
      w_wonder: () => [
         '<25>{#p/toriel}{#f/1}* Yaptığım alışverişten dönerken beni küçük bir mantar karşıladı...',
         SAVE.data.b.snail_pie
            ? '<25>{#f/0}* ... o salyangozlu turta için gerekli malzemeler ile dönüyordum.'
            : '<25>{#f/0}* ... o karamelli turta için gerekli malzemeler ile dönüyordum.',
         '<25>{#f/3}* İlginçtir ki, kapı girişinin yukarısında süzülüyordu...',
         '<25>{#f/0}* O odadaki yer çekimi zayıf olmalı.',
         '<25>{#f/1}* Belki de taksinin varlığının bunun üzerinde bir etkisi vardır...?'
      ],
      w_courtyard: [
         '<25>{#p/toriel}{#f/0}* Ah.\n* Avlu.',
         '<25>{#f/1}* Kabul ediyorum, senin gibi çocukların oynayacağı bir yer olması açısından...',
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
         '<25>{#f/5}* Onlar hakkındaki inançlarımın yanlış olduğu söylendi bana, ama...',
         '<25>{#f/5}* Bu riski almanın akıllıca olmadığını düşündüm.',
         '<25>{#f/9}* ... belki de bakış açımı yeniden gözden geçirme zamanım gelmiştir.'
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
         '<25>{#f/0}* Elbette, taksi hâlâ buralarda olurdu.',
         '<25>{#f/3}* Ama onun yeterince güvenilir olacağından şüpheliyim.',
         '<25>{#f/1}* Bu köprünün hâlâ yerinde olduğuna sevinelim.'
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
         '<25>{#f/0}* Öz değerlendirmenin güçlü bir şey olabileceğini duyuyorum.'
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
         '<25>{#f/1}* I hope you like it...'
      ],
      s_start: () =>
         SAVE.data.n.plot < 17.001
            ? [
                 '<25>{#p/toriel}{#f/0}* Eğer doğruysam, bir arkadaşım ileride bulunuyor olmalı.',
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
                 '<25>{#p/toriel}{#f/0}* Eğer doğruysam, bir arkadaşım ileride bulunuyor olmalı.',
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
                    '<32>{#p/human}* (HP fully restored.)'
                 ]
               : SAVE.data.n.plot < 48
               ? [
                    '<32>{#p/human}* (Endüstriyel Outlands önünde uzanıyor ve içini azimle dolduruyor.)',
                    '<32>{#p/human}* (HP fully restored.)'
                 ]
               : [
                    '<32>{#p/human}* (Uzun bir aradan sonra, her şeyin başladığı yere dönmek...)',
                    '<32>{#p/human}* (işte bu içini azimle dolduruyor.)',
                    '<32>{#p/human}* (HP fully restored.)'
                 ]
      },
      w_froggit: {
         name: 'Outlands - Dinlenme Yeri',
         text: () =>
            SAVE.data.n.state_wastelands_toriel === 2 || world.runaway || roomKills().w_froggit > 0
               ? SAVE.data.n.plot < 8.1
                  ? [
                       '<32>{#p/human}* (Hava pis kokmaya başladı.)\n* (Bir şekilde, bu içini azimle dolduruyor.)',
                       '<32>{#p/human}* (HP fully restored.)'
                    ]
                  : [
                       '<32>{#p/human}* (Hava tamamen kurudu.)\n* (Bilakis, bu içini azimle dolduruyor.)',
                       '<32>{#p/human}* (HP fully restored.)'
                    ]
               : SAVE.data.b.svr
               ? [
                    '<32>{#p/human}* (Bu bölge boşaltıldı, ancak havası temiz duruyor.)',
                    '<32>{#p/human}* (Bu da tabi ki içini azimle dolduruyor.)',
                    '<32>{#p/human}* (HP fully restored.)'
                 ]
               : [
                    '<32>{#p/human}* (Tuhaf ve muhteşem yaratıkları görmek içini azimle dolduruyor.)',
                    '<32>{#p/human}* (HP fully restored.)'
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
