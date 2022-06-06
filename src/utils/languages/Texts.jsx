import { useContext } from 'react';
import { LanguageContext } from '../../contexts';
export default function useDynamicText()
{
    const { lanState } = useContext(LanguageContext);
    const language = lanState[0];

    const introduction = {
        GER: `<p>Freut euch auf die Hochzeit des Jahres!</p>
        <p>Endlich ist es so weit:</p> <p>Über 5 Jahre sind wir als Paar gemeinsam durchs Leben gegangen - die letzten
        Schritte zum Ja-Wort gehen wir mit euch.</p> <p>Danach wird in unserer Hochzeitsburg mit deutschem Bier
        und kolumbianischer Leidenschaft gefeiert.</p>
        <p>Wir fahren alle zusammen mit unserem Hochzeitsbus um 07:30 Uhr zur Trauung im wunderschönen
        Bibliothekssaal.</p><p>Dafür treffen wir uns in Karlsruhe um 07:15 Uhr auf dem Parkplatz Hauptfriedhof,
        wo ihr eure Autos auch bis zum nächsten Tag abstellen könnt.</p>
        <p>Wir freuen uns sehr, mit euch diesen besonderen Tag zu verbringen!</p>
        Die wichtigen Details lest ihr hier…`,
        ESP: `<p>¡Se acerca la boda del año!</p>
        <p>Hemos caminado en esta vida más de cinco años juntos como pareja.</p><p>Los últimos pasos hasta darnos el Sí
        los caminaremos junto con ustedes.</p><p>Después celebraremos en un castillo con cerveza alemana y
        pasión colombiana.</p>
        <p>Viajaremos todos en nuestro bus de boda a las 07:30 am hacia la ceremonia en una hermosa
        Biblioteca histórica.</p><p>Para ello nos encontraremos a las 07:15 am en el parqueadero “Parkplatz
        Hauptfriedhof” (Karlsruhe, Alemania), ahí podrán también parquear su carro hasta el otro día.</p>
        <p>¡Estamos muy felices de poder compartir con ustedes este día tan especial!</p>
        <p>Los datos importantes los pueden leer a continuación…</p>`,
        ENG: `<p>Prepare to enjoy the wedding of the year!</p>
        <p>It is finally here:</p><p>Over 5 years as a couple we have walked together through life.</p><p>The last steps
        towards saying „I do“ we are walking them with you.</p><p>Afterwards we are going to celebrate in a castle
        with german beer and colombian passion.</p>
        <p>We will drive together in our wedding bus at 07:30 am to the ceremony in a beautiful historic library.<br/>
        For that we will meet at 07:15 am in the parking lot “Parkplatz Hauptfriedhof” (Karlsruhe, Germany),
        where you can park your car until the next day.</p>
        <p>We are very happy to have you with us, celebrating this special day!</p>
        <p>All important details are listed below…</p>`
    };
    const schedule = {
        GER:`
        <h2 class="ja-title" style="font-size:60px">30.07.2022</h2>
        <h2 class="ja-title">Tagesablauf</h2>
        <p><b>7:15</b><br/>Treffpunkt: Stumpfstraße 2, 76131 Parkplatz Hauptfriedhof (nahe Hoepfner Burg)</p>
        <p><b>7:30</b><br/>Fahrt mit dem Hochzeitsbus</p>
        <p><b>11:00</b><br/>Trauung im Bibliothekssaal Kloster Wiblingen</p>
        <p><b>12:00</b><br/>Sektempfang im Klosterhof</p>
        <p><b>14:00</b><br/>Rückfahrt mit dem Partybus</p>
        <p><b>16:00</b><br/>Feier Hoepfner Burg (Schalander)</p>
        <p>Ihr wollt euch am Unterhaltungsprogramm beteiligen?</p><p> Bitte meldet Idee für Spiele und Beiträge bis zum 
        <b>09.07.2022</b> bei unserer Trauzeugin
        Nora <br/>(<b>canjtara@gmail.com</b>).<br/> Ideen, die später eingereicht werden, können unter Umständen nicht berücksichtigt werden.</p>
        <h2 class="ja-title">Dresscode</h2>
        <p>Hüllt euch in euren feinsten Zwirn!</p>
        <p>Der Dresscode heißt „Elegant/Formal“.</p>
        <p>Das bedeutet für die Frauen zum Beispiel: Langes elegantes Abendkleid.</p>
        <p>Und für die Männer: Feiner Anzug mit Krawatte oder Fliege.</p>`,
        ESP:`
        <h2 class="ja-title" style="font-size:60px">30.07.2022</h2>
        <h2 class="ja-title">Itinerario</h2>
        <p><b>7:15</b><br/>Punto de encuentro: Stumpfstraße 2, 76131 Karlsruhe “Parkplatz Hauptfriedhof” (cerca de Hoepfner Burg)</p>
        <p><b>7:30</b><br/>Viaje con el bus de boda</p>
        <p><b>11:00</b><br/>Ceremonia en Biblioteca Kloster Wiblingen</p>
        <p><b>12:00</b><br/>Brindis</p>
        <p><b>14:00</b><br/>Regreso con bus fiestero</p>
        <p><b>16:00</b><br/>Fiesta Hoepfner Burg (Schalander)</p>
        <p>¿Quieren hacer parte del programa de entretenimiento?</p><p>Entonces pueden contactar con sus ideas a nuestra dama de honor Nora <br/>(<b>canjtara@gmail.com</b>)<br/>
        hasta el <b>09.07.2022</b>. Las ideas enviadas después no podrán ser consideradas.</p>
        <h2 class="ja-title">Dresscode</h2>
        <p>Pónganse sus mejores prendas!</p>
        <p>El Dresscode es „Elegante/formal“.</p>
        <p>Eso significa para las mujeres, por ejemplo: vestido largo elegante.</p>
        <p>Y para los hombres: Traje fino con corbata o corbatín.</p>`,
        ENG:`
        <h2 class="ja-title" style="font-size:60px">30.07.2022</h2>
        <h2 class="ja-title">Itinerary</h2>
        <p><b>7:15</b><br/>Meeting point: Stumpfstraße 2, 76131 Parkplatz Hauptfriedhof (near Hoepfner Burg)</p>
        <p><b>7:30</b><br/>Drive with the wedding bus</p>
        <p><b>11:00</b><br/>Ceremony in Library Kloster Wiblingen</p>
        <p><b>12:00</b><br/>Toast and lunch</p>
        <p><b>14:00</b><br/>Drive with the party bus</p>
        <p><b>16:00</b><br/>Party Hoepfner Burg (Schalander)</p>
        <p>Do you want to be part of the entertainment program?</p><p>Then contact our maid of honor Nora 
        <br/>(<b>canjtara@gmail.com</b>)<br/>with your ideas until the <b>09.07.2022</b>, so that we can plan a smooth course for the celebration.<br/>
        Ideas submitted later may not be considered.
        </p>
        <h2 class="ja-title">Dresscode</h2>
        <p>Put on your fanciest clothes!</p>
        <p>The Dresscode is „Elegant/formal“.</p>
        <p>That means for the women, for example: long elegant evening dress.</p>
        <p>And for the men: fine suit with tie or bow tie.</p>`
    };
    const accomodation=
    {
        GER:`<h2 class="ja-title">Unterkunft</h2><p>Damit ihr die Feier in allen Zügen und mit allen Annehmlichkeiten genießen könnt, empfehlen wir
        ein komfortables Zimmer in der Hoepfner Burg selbst.</p><p>So könnt ihr nachts beseelt die Treppen hoch
        und ins Bett fallen.</p>
        <p>Für unsere Hochzeit sind mehrere Zimmer bereits vorgemerkt.</p><p>Trotzdem heißt es schnell sein, da nur
        eine begrenzte Anzahl zur Verfügung steht.</p>
        <p>Die Zimmer bucht ihr über <br/><b>reservierung@hoepfner-burghof.de</b></br> mit dem Stichwort <br/>„<b>Weber
        Hochzeit 30.07.22</b>“<br/>. So bekommt ihr eins der vorgemerkten Zimmer und obendrauf noch eine
        Vergünstigung.</p>
        <p>Ihr habt ein Zimmer gebucht?</br> Dann ist auch das gemeinsame Frühstück am nächsten Tag inklusive.</p>`,
        ESP:`<h2 class="ja-title">Alojamiento</h2><p>Para poder disfrutar de la fiesta con todas las de la ley, les recomendamos tomar una habitación en
        el mismo Hoepfner Burg.</p><p>Así podrán subir las escaleras por la noche y caer en la cama.</p>
        <p>Para nuestra boda tenemos un número limitado de habitaciones separadas.</p>
        <p>La habitación la pueden reservar enviando un correo a <br/><b>reservierung@hoepfner-burghof.de</b><br/>con
        el código <br/>„<b>Weber Hochzeit 30.07.2022</b>”<br/>Así les darán un descuento.</p>
        <p>En la reserva está incluido el desayuno de la mañana siguiente.</p>`,
        ENG:`<h2 class="ja-title">Accomodation</h2><p>So that you can enjoy the celebration to the fullest and with all the amenities, we recommend a
        comfortable room in the Hoepfner Burg itself.</p><p>That way you can climb the stairs at night and fall into
        bed.</p>
        <p>For our wedding we have some limited rooms separated.</p>
        <p>To book the room you need to send an E-mail to <br/><b>reservierung@hoepfner-burghof.de</b><br/> and enter
        the keyword <br/>„<b>Weber Hochzeit 30.07.22</b>“<br/>this way you will receive a special discount.</p>
        <p>If you book a room, the breakfast next day is inclusive.</p>`
    };
    const gift=
    {
        GER:`<h2 class="ja-title">Geschenke</h2><p>Dann war noch die Sache mit den Geschenken. Am liebsten wünschen wir uns eine finanzielle Unterstützung für unsere Flitterwochenkasse.</p>`,
        ESP:`<h2 class="ja-title">Regalos</h2><p>Lluvia de sobres:<br/> Nos gustaría recibir una colaboración para nuestro fondo para la luna de miel.</p>`,
        ENG:`<h2 class="ja-title">Gifts</h2><p>We would appreciate to receive financial support for our honeymoon fund.</p>`
    };
    const deadline=
    {
        GER:`<h2 class="ja-title">RSVP</h2><p>Bitte bestätigt uns euer Kommen bis zum 20.06.2022.</p>
        <p>Klickt dazu einfach auf eure Herzen und bestätigt dies unten.</p>`,
        ESP:`<h2 class="ja-title">RSVP</h2><p>Por favor confirmar su asistencia hasta el <b>20.06.2022</b>.</p><p>
        Simplemente haciendo clic al corazón y confirmando en el botón de abajo.</p>`,
        ENG:`<h2 class="ja-title">RSVP</h2><p>Please let us know if you are coming until <b>20.06.2022</b>.</p><p>
        Just click on your hearts and confirm this below.</p>`
    }

    return [introduction[language], schedule[language], accomodation[language], gift[language], deadline[language]];
}