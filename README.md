# Interfejsy graficzne - Projekt zespołowy

Najważniejszą częścią zajęć jest wykonanie projektu zespołowego. W ramach tego projektu należy zaprojektować, zaimplementować i ocenić interfejs użytkownika (tylko interfejs, a nie całą aplikację korzystającą z bazy danych lub połączeń sieciowych — te funkcje aplikacji należy zasymulować). Projektowanie interfejsów użytkownika jest procesem iteracyjnym, tak więc interfejs zostanie wykonany trzykrotnie, za każdym razem z większą precyzją — jako projekt, prototyp i końcowa wersja. Aby mieć czas na wykonanie trzech iteracji należy zacząć jak najwcześniej i pracować systematycznie przez cały semestr.

Zespoły projektowe powinny składać się z 3-4 osób. Temat wybrany do realizacji nie jest narzucony z góry, ale musi spełniać pewne warunki:

- Musi mieć znaczący interfejs użytkownika. Program do odtwarzania plików wideo nie jest tu wystarczający, ale już interfejs pozwalający przeglądać takie pliki, organizować je w kolekcje itp. ma szanse na akceptację.
- Interfejs musi być interaktywny. Statyczna strona WWW, nawet bardzo rozbudowana, nie będzie przyjęta, ale na przykład sklep internetowy z koszykiem i wyszukiwaniem produktów już tak.
- Preferowane są projekty oryginalne. Można oczywiście zrobić interfejs do aplikacji typu album fotograficzny, ale jest ich już bardzo wiele.
- Projekt może być związany z innym aktualnie wykonywanym. Można również zbudować znaczący interfejs użytkownika do programu wykonywanego na zaliczenie innego przedmiotu.

Większość projektów będzie zapewne albo w postaci aplikacji desktopowych albo internetowych, ale dopuszczalne są także inne interfejsy (telefon). Proszę wybrać takie narzędzia, które są już dobrze poznane, przynajmniej przez część zespołu. Tworzenie dużego projektu nie jest najlepszym momentem na naukę nowych języków i / lub bibliotek. Można wybrać dowolne narzędzie dostępne na uczelni lub możliwe do legalnego zainstalowania.

Krytycznie ważna uwaga: aplikacja musi być uruchamialna w pracowni, w której odbywają się zajęcia. Opracowany na etapie 5 komputerowy prototyp UI będzie testowany przez osoby z pozostałych zespołów, nie można więc przygotować tego prototypu w formie, na przykład, aplikacji na iPhone’a. Jej uruchamianie nie może też być bardziej skomplikowane niż „wpisz do przeglądarki zapisany na tablicy URL, ściągnij i rozpakuj archiwum z aplikacją, kliknij dwukrotnie w plik sklep.exe”.

<hr/>
Zbudowana wersja dostępna na gh-pages: https://ignis05.github.io/uj-gui/
<br/>
Uruchomienie:

1. Pobranie repozytorium oraz node.js
2. Zainstalowanie pakietów poleceniem `npm i`
3. Zbudowanie aplikacji poleceniem `npm run build`

Zbudowana aplikacja pojawi się w katalogu `dist`
