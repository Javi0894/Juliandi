import { useContext } from 'react';
import { LanguageContext } from '../../contexts';
export default function useDynamicText()
{
    const { lanState } = useContext(LanguageContext);
    const language = lanState[0];

    const introduction = {
        GER: `Freut euch auf die Hochzeit des Jahres!\n
        Endlich ist es so weit: Über 5 Jahre sind wir als Paar gemeinsam durchs Leben gegangen - die letzten
        Schritte zum Ja-Wort gehen wir mit euch. Danach wird in unserer Hochzeitsburg mit deutschem Bier
        und kolumbianischer Leidenschaft gefeiert.\n
        Wir fahren alle zusammen mit unserem Hochzeitsbus um 07:30 Uhr zur Trauung im wunderschönen
        Bibliothekssaal. Dafür treffen wir uns in Karlsruhe um 07:15 Uhr auf dem Parkplatz Hauptfriedhof,
        wo ihr eure Autos auch bis zum nächsten Tag abstellen könnt.\n
        Wir freuen uns sehr, mit euch diesem besonderen Tag zu verbringen!\n
        Die wichtigen Details lest ihr hier…`,
        ESP: `¡Se acerca la boda del año!\n
        Más de 5 años hemos caminado esta vida juntos como pareja. Los últimos pasos hasta darnos el Sí
        los caminaremos junto con ustedes. Después celebraremos en un castillo con cerveza alemana y
        pasión colombiana.\n
        Viajaremos todos en nuestro bus de boda a las 07:30 am hacia la ceremonia en una hermosa
        Biblioteca histórica. Para ello nos encontraremos a las 07:15 am en el parqueadero “Parkplatz
        Hauptfriedhof” (Karlsruhe, Alemania), ahí podrán también parquear su carro hasta el otro día.
        ¡Estamos muy felices de poder compartir con ustedes este día tan especial!\n
        Los datos importantes los pueden leer a continuación…`,
        ENG: `Prepare to enjoy the wedding of the year!\n
        It is finally here: Over 5 years as a couple we have walked together through life. The last steps
        towards saying „I do“ we are walking them with you. Afterwards we are going to celebrate in a castle
        with german beer and colombian passion.\n
        We will drive together in our wedding bus at 07:30 am to the ceremony in a beautiful historic library.
        For that we will meet at 07:15 am in the parking lot “Parkplatz Hauptfriedhof” (Karlsruhe, Germany),
        where you can park your car until the next day.\n
        We are very happy to have you with us, celebrating this special day!\n
        All important details are listed below…`
    };
    const schedule = {
        GER:`
        <h2>Tagesablauf</h2>
        <p><b>7:15</b><br/>Treffpunkt: Stumpfstraße 2, 76131 Parkplatz Hauptfriedhof (nahe Hoepfner Burg)</p>
        <p><b>7:30</b><br/>Fahrt mit dem Hochzeitsbus</p>
        <p><b>11:00</b><br/>Trauung im Bibliothekssaal Kloster Wiblingen</p>
        <p><b>12:00</b><br/>Sektempfang im Klosterhof</p>
        <p><b>14:00</b><br/>Rückfahrt mit dem Partybus</p>
        <p><b>16:00</b><br/>Feier Hoepfner Burg (Schalander)</p>
        Ihr wollt euch am Unterhaltungsprogramm beteiligen? Dann wendet euch mit euren Ideen gerne an
        Nora (<b>canjtara@gmail.com</b>).<br/>
        <h3>Hüllt euch in euren feinsten Zwirn!</h3>
        Der Dresscode heißt „Elegant/Formal“.<br/>
        <b>Das bedeutet für die Frauen zum Beispiel: Langes elegantes Abendkleid.<br/>
        Und für die Männer: Feiner Anzug mit Krawatte oder Fliege.</b>`,
        ESP:`
        <h2>Itinerario</h2>
        <p><b>7:15</b><br/>Punto de encuentro: Stumpfstraße 2, 76131 Karlsruhe “Parkplatz Hauptfriedhof” (cerca de Hoepfner Burg)</p>
        <p><b>7:30</b><br/>Viaje con el bus de boda</p>
        <p><b>11:00</b><br/>Ceremonia en Biblioteca Kloster Wiblingen</p>
        <p><b>12:00</b><br/>Brindis</p>
        <p><b>14:00</b><br/>Regreso con bus fiestero</p>
        <p><b>16:00</b><br/>Fiesta Hoepfner Burg (Schalander)</p>
        ¿Quieren hacer parte del programa de entretenimiento? Entonces pueden contactar con sus ideas a
        Nora (<b>canjtara@gmail.com</b>).<br/>
        <h3>Pónganse sus mejores prendas!</h3>
        El Dresscode es „Elegante/formal“.<br/>
        <b>Eso significa para las mujeres, por ejemplo: vestido largo elegante.<br/>
        Y para los hombres: Traje fino con corbata o corbatín.</b>`,
        ENG:`
        <h2>Itinerary</h2>
        <p><b>7:15</b><br/>Meeting point: Stumpfstraße 2, 76131 Parkplatz Hauptfriedhof (near Hoepfner Burg)</p>
        <p><b>7:30</b><br/>Drive with the wedding bus</p>
        <p><b>11:00</b><br/>Ceremony in Library room Kloster Wiblingen</p>
        <p><b>12:00</b><br/>Toast and lunch</p>
        <p><b>14:00</b><br/>Drive with the party bus</p>
        <p><b>16:00</b><br/>Party Hoepfner Burg (Schalander)</p>
        Do you want to be part of the entertainment program? Then contact Nora with your ideas
        (<b>canjtara@gmail.com</b>).<br/>
        <h3>Put on your fanciest clothes!</h3>
        The Dresscode is „Elegant/formal“.<br/>
        <b>That means for the women, for example: long elegant evening dress.<br/>
        And for the men: fine suit with tie or bow tie.</b>`
    };
    const accomodation=
    {
        GER:`<p>Damit ihr die Feier in allen Zügen und mit allen Annehmlichkeiten genießen könnt, empfehlen wir
        ein komfortables Zimmer in der Hoepfner Burg selbst. So könnt ihr nachts beseelt die Treppen hoch
        und ins Bett fallen.<br/>
        Für unsere Hochzeit sind mehrere Zimmer bereits vorgemerkt. Trotzdem heißt es schnell sein, da nur
        eine begrenzte Anzahl zur Verfügung steht.<br/>
        <b>Die Zimmer bucht ihr über reservierung@hoepfner-burghof.de mit dem Stichwort „Weber
        Hochzeit 30.07.22“. So bekommt ihr eins der vorgemerkten Zimmer und obendrauf noch eine
        Vergünstigung.</b><br/>
        Ihr habt ein Zimmer gebucht? Dann ist auch das gemeinsame Frühstück am nächsten Tag inklusive.</p>`,
        ESP:`<p>Para poder disfrutar de la fiesta con todas las de la ley, les recomendamos tomar una habitación en
        el mismo Hoepfner Burg. Así podrán subir las escaleras por la noche y caer en la cama.<br/>
        Para nuestra boda tenemos un número limitado de habitaciones separadas.<br/>
        <b>La habitación la pueden reservar enviando un correo a reservierung@hoepfner-burghof.de con
        el código “Weber Hochzeit 30.07.2022”, así les darán un descuento.</b><br/>
        En la reserva está incluido el desayuno de la mañana siguiente.</p>`,
        ENG:`<p>So that you can enjoy the celebration to the fullest and with all the amenities, we recommend a
        comfortable room in the Hoepfner Burg itself. That way you can climb the stairs at night and fall into
        bed.<br/>
        For our wedding we have some limited rooms separated.<br/>
        <b>To book the room you need to send an E-mail to reservierung@hoepfner-burghof.de and enter
        the keyword &quot;Weber Hochzeit 30.07.22&quot; this way you will receive a special discount.</b><br/>
        If you book a room, the breakfast next day is inclusive.</p>`
    };
    const gift=
    {
        GER:`<h3>Dann war noch die Sache mit den Geschenken. Am liebsten wünschen wir uns eine finanzielle Unterstützung für unsere Flitterwochenkasse.</h3>`,
        ESP:`<h3>Lluvia de sobres: Nos gustaría recibir una colaboración para nuestro fondo para la luna de miel.</h3>`,
        ENG:`<h3>We would appreciate to receive financial support for our honeymoon fund.</h3>`
    };
    const deadline=
    {
        GER:`Bitte bestätigt uns euer Kommen bis zum 20.06.2022.\n
        Klickt dazu einfach auf eure Herzen und bestätigt dies unten.`,
        ESP:`Por favor confirmar su asistencia hasta el 20.06.2022.\n
        Simplemente haciendo clic al corazón y confirmando en el botón de abajo.`,
        ENG:`Please let us know if you are coming until 20.06.2022.\n
        Just click on your hearts and confirm this below.`
    }

    return [introduction[language], schedule[language], accomodation[language], gift[language], deadline[language]];
}