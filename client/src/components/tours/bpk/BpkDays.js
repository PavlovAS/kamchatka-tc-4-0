import React from 'react';

const BpkDays = () => {
  const togglePlusIcon = e => {
    /*
    if (e.target.nodeName === 'BUTTON') {
      
      const item = document.querySelector('#' + e.target.id + ' .fas');
      item.classList.toggle('fa-plus');
      item.classList.toggle('fa-minus');
      
    } else {
      e.target.classList.toggle('fa-plus');
      e.target.classList.toggle('fa-minus');
    }
    */
  };
  return (
    <div className="col-lg-7 days">
      {/* DAY 1 */}
      <div className="card">
        <div className="card-header">
          <button
            id="btn-day-1"
            className="btn text-left"
            type="button"
            data-toggle="collapse"
            data-target="#collapse-1"
            aria-expanded="false"
            aria-controls="collapse-1"
            onClick={e => togglePlusIcon(e)}
          >
            <i className="fas fa-plus mr-2"></i> День 1. Прилет, экскурсия по
            городу.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-1">
          <p>
            <img
              src={require('../../../img/tour-bpk/small/day1.jpg')}
              alt="Большое путешествие по Камчатке"
            />
            Прилет в аэропорт Петропавловска-Камчатского. Сразу отправляемся на
            небольшую экскурсию по Петропавловску-Камчатскому (обзор на город и
            Авачинскую бухту со смотровой площадки), затем переезжаем к
            побережью Тихого океана (Халактырский пляж), где мочим ноги в
            ледяной воде (в теплую погоду и при отсутствии ветра самые
            закаленные могут искупаться), ощущаем себя на краю огромной пропасти
            занимающей более трети поверхности Земного шара.
          </p>
          <p>
            К вечеру заселяемся в гостиницу в курортной зоне Паратунка,
            двухместное размещение, горячее питание включено (ужин, завтрак),
            бассейн с природной горячей термальной водой.
          </p>
          <p>
            * На экскурсию к океану отправляются туристы, прибывшие на Камчатку
            до 14-00. Прилетающим позже нужно будет добраться до гостиницы на
            такси. Если удобный Вам рейс прибывает позже 14-00, но Вы хотите
            попасть на экскурсию первого дня, то необхоимо прилетать на день
            раньше.
          </p>
        </div>
      </div>
      {/* DAY 2 */}
      <div className="card">
        <div className="card-header">
          <button
            id="btn-day-2"
            className="btn text-left"
            type="button"
            data-toggle="collapse"
            data-target="#collapse-2"
            aria-expanded="false"
            aria-controls="collapse-2"
            onClick={e => togglePlusIcon(e)}
          >
            <i className="fas fa-plus mr-2"></i> День 2. Переезд к вулкану
            Горелый (60км), восхождение к кратеру, ночевка в палатках.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-2">
          <p>
            <img
              src={require('../../../img/tour-bpk/small/day2.jpg')}
              alt="Большое путешествие по Камчатке"
            />
            Выезд из Петропавловска-Камчатского в 7-00, дорога до кальдеры
            вулкана Горелый занимает 3-4 часа, по пути остановка на Вилючинском
            перевале для фотографирования, далее восхождение к кратеру Горелого
            (1829 метров) налегке - 2-3 часа в зависимости от физической
            подготовки, 1,5 часа на обход кратера, фотографирование, легкий
            перекус и спуск к машине, переезд к месту ночевки (в зависимости от
            погоды, сезона и на усмотрение гида).
          </p>
          <p>
            Вулкан Горелый условно делится на две сущности. Древний щитообразный
            вулкан занимает огромную площадь в 650 кв. км, на севере его пологие
            склоны прослеживаются вплоть до верховьев реки Паратунка, венчается
            он 13-километровой кальдерой и современной постройкой вулкана в ее
            центре - здесь насчитывается до 11 кратеров и около 30 побочных
            шлаковых конусов. Древние и относительно недавние лавовые потоки
            покрывают почти все дно кальдеры, а некоторые выходят и за ее
            пределы. В последние два столетия происходили только пепловые
            извержения, они не отличаются силой и выражаются в выбросах на
            высоту нескольких сот метров газов и раздробленных материалов.
            Ночевка в палатках.
          </p>
        </div>
      </div>
      {/* DAY 3 */}
      <div className="card">
        <div className="card-header">
          <button
            id="btn-day-3"
            className="btn text-left"
            type="button"
            data-toggle="collapse"
            data-target="#collapse-3"
            aria-expanded="false"
            aria-controls="collapse-3"
            onClick={e => togglePlusIcon(e)}
          >
            <i className="fas fa-plus mr-2"></i> День 3. Восхождение в кратер
            активного вулкана Мутновский, экскурсия, возвращение в палаточный
            лагерь.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-3">
          <p>
            <img
              src={require('../../../img/tour-bpk/small/day3.jpg')}
              alt="Большое путешествие по Камчатке"
            />
            Экскурсия в кратер вулкана Мутновский, возможны два пути восхождения
            - длинный (12 км в одну сторону) и короткий - 3 км, выбирается в
            зависимости от состояния снежного покрова (возможно ли проехать до
            начала короткого пути). Внутри кратера легкий перекус, время на
            фотографирование, на обратном пути заход к водопаду в каньоне
            Опасный, возвращение к машине и далее в палаточный лагерь.
            Абсолютная высота Мутновского - 2323м, один из крупнейших вулканов
            юга Камчатки, за исторический период времени вулкан извергался не
            менее 16 раз. Наиболее сильное извержение произошло в 1848 году.
            Самое недавнее извержение приходится на 2000 год. Имеет сложное
            строение - несколько сросшихся кратеров. Через разрушенную стенку
            одного из кратеров туристы могут пройти внутрь мимо высоких отвесных
            скал и увидеть интенсивную фумарольную деятельность внутри. Ночевка
            в палатках.
          </p>
        </div>
      </div>
      {/* DAY 4 */}
      <div className="card">
        <div className="card-header">
          <button
            id="btn-day-4"
            className="btn text-left"
            type="button"
            data-toggle="collapse"
            data-target="#collapse-4"
            aria-expanded="false"
            aria-controls="collapse-4"
            onClick={e => togglePlusIcon(e)}
          >
            <i className="fas fa-plus mr-2"></i> День 4. Осомотр Дачных
            термальных источников, резервный день на погоду, возвращение в
            гостиницу.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-4">
          <p>
            <img
              src={require('../../../img/tour-bpk/small/day4.jpg')}
              alt="Большое путешествие по Камчатке"
            />
            Переезд к Мутновской геотермальной электростанции, пешая экскурсия к
            Дачным термальным источникам, к вечеру возвращение в город. Дачные
            горячие источники иногда называют «Малой Долиной Гейзеров» - это
            активное фумарольное поле, горячие газы которого проходят сквозь
            воду холодного ручья, нагревая его и создавая эффект фонтанирования
            в ряде случаев. Ночевка в гостинице.
          </p>
        </div>
      </div>
      {/* DAY 5 */}
      <div className="card">
        <div className="card-header">
          <button
            id="btn-day-5"
            className="btn text-left"
            type="button"
            data-toggle="collapse"
            data-target="#collapse-5"
            aria-expanded="false"
            aria-controls="collapse-5"
            onClick={e => togglePlusIcon(e)}
          >
            <i className="fas fa-plus mr-2"></i> Дни 5 - 7. Сплав на рафтах по
            реке Быстрая, возможность рыбалки и встречи с медведем.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-5">
          <p>
            <img
              src={require('../../../img/tour-bpk/small/day5.jpg')}
              alt="Большое путешествие по Камчатке"
            />
            Начало трехдневного сплава по реке Быстрой в центральной части
            полуострова, выезд к месту начала сплава (2 часа в пути), подготовка
            рафтов, снаряжения и выход на реку в районе поселка Малки. По пути
            сплава туристы могут любоваться живописными видами проплывающих мимо
            сопок, поросших густым кедрачом и ни кем не хоженных, желающие могут
            порыбачить на спининг. Река достаточно спокойная, сплав не
            спортивный, а "экскурсионно - развлекательный", поэтому по силам
            всем желающим, в том числе и детям, хотя несколько небольших порогов
            на реке добавят адреналина и незабываемых впечатлений. Две ночевки в
            палатках на берегах реки, к обеду третьего дня сплав заканчивается у
            Японоского моста, туристы переезжают обратно в гостиницу.
          </p>
        </div>
      </div>
      {/* DAY 8 */}
      <div className="card">
        <div className="card-header">
          <button
            id="btn-day-8"
            className="btn text-left"
            type="button"
            data-toggle="collapse"
            data-target="#collapse-8"
            aria-expanded="false"
            aria-controls="collapse-8"
            onClick={e => togglePlusIcon(e)}
          >
            <i className="fas fa-plus mr-2"></i> День 6. Переход в долину трех
            вулканов (15 км с рюкзаком).
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-8">
          <p>
            <img
              src={require('../../../img/tour-bpk/small/day8.jpg')}
              alt="Большое путешествие по Камчатке"
            />
            <h4>Вариант 1</h4>
            Подъезжаем под вулкан Авачинский и делаем восхождение на его кратер
            (высота 2751 метр). Путь наверх в среднем темпе занимает от 5 до 7
            часов, на кратере нас ждет потрясающий вид на окрестности -
            Петропавловск-Камчатский, Авачинская бухта, побережье Тихого океана,
            Налычевская долина, вулканы Корякский, Козельский, Жупановский,
            Мутновский. В кратере не прекращается активная деятельность, пахнет
            серой, парят фумаролы, земля горячая - можно согреться и укрыться от
            холодного ветра. Спустившись с кратера, на машине возвращаемся в
            гостиницу.
          </p>
          <h4>Вариант 2 - облегченный</h4>
          <p>
            Морская экскурсия. Катер отправляется утром из морпорта
            Петропавловска-Камчатского, выходит в открытый океан через ворота
            Авачинской бухты и идет на юг вдоль восточного побережья Камчатки,
            изрезанного красивыми бухтами с высокими скальными бортами, по пути
            смотрим символ Петропавловска - скалы "Три брата", птичьи базары,
            виды на "домашние" вулканы и вулкан Вилючинский. Конечная точка -
            остров СтАричков, место гнездования огромного количества птиц. Обед
            на борту из свеже сваренной ухи. После обеда возвращение в
            гостиницу.
          </p>
        </div>
      </div>
      {/* DAY 9 */}
      <div className="card">
        <div className="card-header">
          <button
            id="btn-day-14"
            className="btn text-left"
            type="button"
            data-toggle="collapse"
            data-target="#collapse-14"
            aria-expanded="false"
            aria-controls="collapse-14"
            onClick={e => togglePlusIcon(e)}
          >
            <i className="fas fa-plus mr-2"></i> День 9. Рыбный рынок, магазин
            сувениров, трансфер в аэропорт.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-14">
          <p>
            <img
              src={require('../../../img/tour-bpk/small/day9.jpg')}
              alt="Большое путешествие по Камчатке"
            />
            Окончание тура, трансфер в аэропорт с заездом на рыбный рынок и в
            магазин сувениров.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BpkDays;