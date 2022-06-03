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
        Tagesablauf\n
        7:15\n
        Treffpunkt: Stumpfstraße 2, 76131 Parkplatz Hauptfriedhof (nahe Hoepfner Burg)\n
        7:30\n
        Fahrt mit dem Hochzeitsbus\n
        11:00\n
        Trauung im Bibliothekssaal Kloster Wiblingen\n
        12:00\n
        Sektempfang im Klosterhof\n
        14:00\n
        Rückfahrt mit dem Partybus\n
        16:00\n
        Feier Hoepfner Burg (Schalander)\n
        Ihr wollt euch am Unterhaltungsprogramm beteiligen? Dann wendet euch mit euren Ideen gerne an
        Nora (canjtara@gmail.com).\n
        Hüllt euch in euren feinsten Zwirn!\n
        Der Dresscode heißt „Elegant/Formal“.\n
        Das bedeutet für die Frauen zum Beispiel: Langes elegantes Abendkleid.\n
        Und für die Männer: Feiner Anzug mit Krawatte oder Fliege.`,
        ESP:`
        Itinerario\n
        7:15\n
        Punto de encuentro: Stumpfstraße 2, 76131 Karlsruhe “Parkplatz Hauptfriedhof” (cerca de Hoepfner Burg)\n
        7:30\n
        Viaje con el bus de boda\n
        11:00\n
        Ceremonia en Biblioteca Kloster Wiblingen\n
        12:00\n
        Brindis\n
        14:00\n
        Regreso con bus fiestero\n
        16:00\n
        Fiesta Hoepfner Burg (Schalander)\n
        ¿Quieren hacer parte del programa de entretenimiento? Entonces pueden contactar con sus ideas a
        Nora (canjtara@gmail.com).\n
        Pónganse sus mejores prendas!\n
        El Dresscode es „Elegante/formal“.\n
        Eso significa para las mujeres, por ejemplo: vestido largo elegante.\n
        Y para los hombres: Traje fino con corbata o corbatín.`,
        ENG:`
        Itinerary\n
        7:15\n
        Meeting point: Stumpfstraße 2, 76131 Parkplatz Hauptfriedhof (near Hoepfner Burg)\n
        7:30\n
        Drive with the wedding bus\n
        11:00\n
        Ceremony in Library room Kloster Wiblingen\n
        12:00\n
        Toast and lunch\n
        14:00\n
        Drive with the party bus\n
        16:00\n
        Party Hoepfner Burg (Schalander)\n
        Do you want to be part of the entertainment program? Then contact Nora with your ideas
        (canjtara@gmail.com).\n
        Put on your fanciest clothes!\n
        The Dresscode is „Elegant/formal“.\n
        That means for the women, for example: long elegant evening dress.\n
        And for the men: fine suit with tie or bow tie.`
    };
    const accomodation=
    {
        GER:`Damit ihr die Feier in allen Zügen und mit allen Annehmlichkeiten genießen könnt, empfehlen wir
        ein komfortables Zimmer in der Hoepfner Burg selbst. So könnt ihr nachts beseelt die Treppen hoch
        und ins Bett fallen.\n
        Für unsere Hochzeit sind mehrere Zimmer bereits vorgemerkt. Trotzdem heißt es schnell sein, da nur
        eine begrenzte Anzahl zur Verfügung steht.\n
        Die Zimmer bucht ihr über reservierung@hoepfner-burghof.de mit dem Stichwort „Weber
        Hochzeit 30.07.22“. So bekommt ihr eins der vorgemerkten Zimmer und obendrauf noch eine
        Vergünstigung.\n
        Ihr habt ein Zimmer gebucht? Dann ist auch das gemeinsame Frühstück am nächsten Tag inklusive.`,
        ESP:`Para poder disfrutar de la fiesta con todas las de la ley, les recomendamos tomar una habitación en
        el mismo Hoepfner Burg. Así podrán subir las escaleras por la noche y caer en la cama.\n
        Para nuestra boda tenemos un número limitado de habitaciones separadas.\n
        La habitación la pueden reservar enviando un correo a reservierung@hoepfner-burghof.de con
        el código “Weber Hochzeit 30.07.2022”, así les darán un descuento.\n
        En la reserva está incluido el desayuno de la mañana siguiente.`,
        ENG:`So that you can enjoy the celebration to the fullest and with all the amenities, we recommend a
        comfortable room in the Hoepfner Burg itself. That way you can climb the stairs at night and fall into
        bed.\n
        For our wedding we have some limited rooms separated.\n
        To book the room you need to send an E-mail to reservierung@hoepfner-burghof.de and enter
        the keyword &quot;Weber Hochzeit 30.07.22&quot; this way you will receive a special discount.\n
        If you book a room, the breakfast next day is inclusive.`
    };
    const gift=
    {
        GER:`Dann war noch die Sache mit den Geschenken. Am liebsten wünschen wir uns eine finanzielle Unterstützung für unsere Flitterwochenkasse.`,
        ESP:`Lluvia de sobres: Nos gustaría recibir una colaboración para nuestro fondo para la luna de miel.`,
        ENG:`We would appreciate to receive financial support for our honeymoon fund.`
    }

    return [introduction[language], schedule[language], accomodation[language], gift[language]];
}