# Workshop Ziel
Entwicklung mit dem Coding Assistenten kennenlernen:

Dazu erstellen wir eine Webanwendung in Angular mithilfe des Coding Assistenten Continue (KI Agenten Claude).

1. Anforderungen Definieren (bereits vorhanden, siehe Kontext)
2. Prompting & Generation Process (Your Job) -
Einen Promt erstellen oder die Vorlage in /prompt.md verwenden &
den Kontext hinzufügen
3. Experten-Review & Kritische Analyse (Your Job)

Das ist ein iterativer/agiler Prozess scheue dich nicht zwischen den Schritten hin und her zu springen.

### Aufgabe 
Erstellung eines UI zur Einsicht von Mitarbeiterdaten, bestehend aus einer navigierbaren Übersichtstabelle und Mitarbeitersteckbriefen. Sowie die Anbindung an der API in  [API Beschreibung Dummy JSON USER](dummy-json-user-api.yml)

Wähle einen Ansatz.

**Alles in einem Durchlaufen - Agent entscheiden lassen:**
Der Prompt in *prompt.md* ist dafür gedacht den Agenten die Applikation in einen Durchlaufen zu generieren.
Achte darauf, der Agent könnte nach einer Weile abbrechen könnte und durch deine Anweisung vorangetrieben werden muss.

**Vorgehen was generiert wird:**
In diesen  Ansatz wollen wir die Kontrolle darüber übernehmen, wie die KI vorgeht.   


Hier ist ein Vorschlag.  
1. Layout
2. (Datenmodel von API ableiten)
3. Komponenten 
    - Seitenmenü Departments
    - Tabelle 
    - Mitarbeitersteckbrief
4. Tabelle an Backend anbinden


### Kontext
Definierte Anforderungen andProduktziels.

Das Bild des Prototypen */prototype.png*  
![Prototype Mitarbeiter Verwaltung mit 3 Spaltigen Layout, Branch Mitarbeiter Tabelle und Steckbrief](prototype.png)
Beschreibung des Prototypen: 

3 User Stories mit Akzeptanzkriterein [text](user_storys.md)  
API Spezifikation [APi Spezifikation](dummy-json-user-api.yml)  
