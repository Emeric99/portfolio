from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import mm
from reportlab.pdfgen import canvas

PAGE_W, PAGE_H = A4
LEFT_COL_W = 68 * mm
RIGHT_COL_X = LEFT_COL_W + 9 * mm
RIGHT_COL_W = PAGE_W - RIGHT_COL_X - 10 * mm

DARK_BG    = colors.HexColor("#1a1a2e")
HEADER_BG  = colors.HexColor("#0d2137")
ACCENT     = colors.HexColor("#4fc3f7")
SEC_BLUE   = colors.HexColor("#0d7db8")
WHITE      = colors.white
DARK_TEXT  = colors.HexColor("#2c2c2c")
GRAY_TEXT  = colors.HexColor("#555555")


# ── helpers ────────────────────────────────────────────────────────────────

def wrap(c, text, font, size, max_w):
    words = text.split()
    line, lines = "", []
    for w in words:
        test = (line + " " + w).strip()
        if c.stringWidth(test, font, size) <= max_w:
            line = test
        else:
            lines.append(line)
            line = w
    if line:
        lines.append(line)
    return lines


def left_section(c, y, title):
    c.setFillColor(ACCENT)
    c.setFont("Helvetica-Bold", 7.5)
    c.drawString(8*mm, y, title.upper())
    c.setStrokeColor(ACCENT)
    c.setLineWidth(0.5)
    c.line(8*mm, y - 1.5*mm, LEFT_COL_W - 6*mm, y - 1.5*mm)
    return y - 6*mm


def right_section(c, y, title):
    c.setFillColor(SEC_BLUE)
    c.setFont("Helvetica-Bold", 10)
    c.drawString(RIGHT_COL_X, y, title.upper())
    c.setStrokeColor(SEC_BLUE)
    c.setLineWidth(0.8)
    c.line(RIGHT_COL_X, y - 2*mm, RIGHT_COL_X + RIGHT_COL_W, y - 2*mm)
    return y - 7*mm


def left_label_value(c, y, label, value, label_w=18*mm):
    c.setFillColor(ACCENT)
    c.setFont("Helvetica-Bold", 7.5)
    c.drawString(8*mm, y, label)
    c.setFillColor(WHITE)
    c.setFont("Helvetica", 7)
    lines = wrap(c, value, "Helvetica", 7, LEFT_COL_W - 8*mm - label_w)
    for i, l in enumerate(lines):
        c.drawString(8*mm + label_w, y - i*3.8*mm, l)
    return y - len(lines)*3.8*mm - 1*mm


def left_bullet(c, y, text, size=7):
    c.setFillColor(ACCENT)
    c.circle(10.5*mm, y + 1.3*mm, 0.9*mm, fill=1, stroke=0)
    c.setFillColor(WHITE)
    c.setFont("Helvetica", size)
    lines = wrap(c, text, "Helvetica", size, LEFT_COL_W - 15*mm)
    for i, l in enumerate(lines):
        c.drawString(13*mm, y - i*3.8*mm, l)
    return y - len(lines)*3.8*mm - 0.5*mm


def left_lang(c, y, lang, level):
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 8)
    c.drawString(8*mm, y, lang)
    c.setFillColor(ACCENT)
    c.setFont("Helvetica", 8)
    c.drawString(38*mm, y, level)
    return y - 5*mm


def right_entry(c, y, title, date, org, bullets):
    c.setFillColor(DARK_TEXT)
    c.setFont("Helvetica-Bold", 9)
    c.drawString(RIGHT_COL_X, y, title)
    c.setFillColor(SEC_BLUE)
    c.setFont("Helvetica", 7.5)
    dw = c.stringWidth(date, "Helvetica", 7.5)
    c.drawString(RIGHT_COL_X + RIGHT_COL_W - dw, y, date)
    y -= 4.5*mm
    if org:
        c.setFillColor(GRAY_TEXT)
        c.setFont("Helvetica-Oblique", 8)
        c.drawString(RIGHT_COL_X, y, org)
        y -= 4.5*mm
    for b in bullets:
        c.setFillColor(SEC_BLUE)
        c.circle(RIGHT_COL_X + 1.8*mm, y + 1.3*mm, 0.9*mm, fill=1, stroke=0)
        c.setFillColor(DARK_TEXT)
        c.setFont("Helvetica", 7.5)
        lines = wrap(c, b, "Helvetica", 7.5, RIGHT_COL_W - 6*mm)
        for i, l in enumerate(lines):
            c.drawString(RIGHT_COL_X + 5*mm, y - i*3.8*mm, l)
        y -= len(lines)*3.8*mm + 0.8*mm
    return y - 2.5*mm


def right_text(c, y, text, size=8):
    c.setFillColor(DARK_TEXT)
    c.setFont("Helvetica", size)
    for l in wrap(c, text, "Helvetica", size, RIGHT_COL_W):
        c.drawString(RIGHT_COL_X, y, l)
        y -= 4.3*mm
    return y - 1*mm


# ── build ──────────────────────────────────────────────────────────────────

def build():
    out = r"C:\Users\emeri\Downloads\Identität\Lebenslauf_Tcholagheu.pdf"
    c = canvas.Canvas(out, pagesize=A4)

    # ════════════════════════ PAGE 1 ════════════════════════

    # left dark panel
    c.setFillColor(DARK_BG)
    c.rect(0, 0, LEFT_COL_W, PAGE_H, fill=1, stroke=0)

    # header band
    HDR = 40*mm
    c.setFillColor(HEADER_BG)
    c.rect(0, PAGE_H - HDR, PAGE_W, HDR, fill=1, stroke=0)
    c.setFillColor(ACCENT)
    c.rect(0, PAGE_H - HDR - 1.5*mm, PAGE_W, 1.5*mm, fill=1, stroke=0)

    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 22)
    c.drawString(8*mm, PAGE_H - 18*mm, "EMERIC TCHOLAGHEU")
    c.setFillColor(ACCENT)
    c.setFont("Helvetica", 11)
    c.drawString(8*mm, PAGE_H - 28*mm, "WEBENTWICKLER  |  INFORMATIKSTUDENT")
    c.setFillColor(colors.HexColor("#aaaaaa"))
    c.setFont("Helvetica", 8)
    c.drawRightString(PAGE_W - 10*mm, PAGE_H - 8*mm, "Bremerhaven, 03.06.2026")

    # ── LEFT col p1
    y_l = PAGE_H - HDR - 9*mm

    y_l = left_section(c, y_l, "Kontakt")
    y_l = left_label_value(c, y_l, "Tel:",    "+49 155 664 772 27")
    y_l = left_label_value(c, y_l, "Mail:",   "emerictcholagheu@gmail.com")
    y_l = left_label_value(c, y_l, "Ort:",    "Adolfstrasse 8, 27576 Bremerhaven")
    y_l = left_label_value(c, y_l, "GitHub:", "github.com/emeric-tc")
    y_l = left_label_value(c, y_l, "Web:",    "portfolio-emeric.vercel.app")
    y_l -= 4*mm

    y_l = left_section(c, y_l, "Hard-Skills")
    c.setFillColor(ACCENT); c.setFont("Helvetica-Bold", 7.5)
    c.drawString(8*mm, y_l, "Programmiersprachen")
    y_l -= 4.5*mm
    for s in ["Java", "JavaScript", "Bash", "Python (Grundkenntnisse)"]:
        y_l = left_bullet(c, y_l, s)
    y_l -= 1*mm
    c.setFillColor(ACCENT); c.setFont("Helvetica-Bold", 7.5)
    c.drawString(8*mm, y_l, "Technologien")
    y_l -= 4.5*mm
    for s in ["REST APIs", "Docker", "Jakarta EE"]:
        y_l = left_bullet(c, y_l, s)
    y_l -= 1*mm
    c.setFillColor(ACCENT); c.setFont("Helvetica-Bold", 7.5)
    c.drawString(8*mm, y_l, "Datenbanken")
    y_l -= 4.5*mm
    for s in ["SQL", "MariaDB", "Redis"]:
        y_l = left_bullet(c, y_l, s)
    y_l -= 1*mm
    c.setFillColor(ACCENT); c.setFont("Helvetica-Bold", 7.5)
    c.drawString(8*mm, y_l, "Tools")
    y_l -= 4.5*mm
    for s in ["Git", "GitHub", "Tomcat", "HikariCP"]:
        y_l = left_bullet(c, y_l, s)
    y_l -= 4*mm

    y_l = left_section(c, y_l, "Soft-Skills")
    for s in ["Analytisches Denken", "Strukturierte Arbeitsweise",
              "Detailorientiert", "Hoher Qualitaetsanspruch", "Kontinuierliches Lernen"]:
        y_l = left_bullet(c, y_l, s)

    # ── RIGHT col p1
    y_r = PAGE_H - HDR - 9*mm

    y_r = right_section(c, y_r, "Profil")
    c.setFillColor(DARK_TEXT); c.setFont("Helvetica-Bold", 8)
    c.drawString(RIGHT_COL_X, y_r,
        "Fokus: Softwareentwicklung | Prozessautomatisierung | Datenbasierte Systeme")
    y_r -= 5.5*mm
    y_r = right_text(c, y_r,
        "Analytisch arbeitender Informatikstudent mit Erfahrung in der Entwicklung "
        "datenbankgestuetzter Anwendungen und der strukturierten Abbildung von Prozessen. "
        "Analytisches Denken, schnelle Auffassungsgabe und strukturierte Arbeitsweise "
        "praegen mich. Ich eigne mir rasch neue Technologien an, sehe Herausforderungen "
        "als Chancen fuer innovative Loesungen und kontinuierliches Lernen.")
    y_r -= 4*mm

    y_r = right_section(c, y_r, "Erfahrungen")

    y_r = right_entry(c, y_r,
        "Impftermin-Buchungssystem", "07/2025 - HEUTE",
        "Eigenprojekt  |  Java | SQL | Docker | MariaDB | Redis | Jakarta EE",
        ["Entwicklung einer datenbankgestuetzten Webanwendung zur strukturierten Verwaltung von Terminprozessen",
         "Konzeption und Umsetzung von Benutzer- und Terminlogik inkl. Admin-Funktionalitaeten",
         "Integration von Redis zur Optimierung von Datenzugriffen",
         "Containerisierung der Anwendung mit Docker fuer reproduzierbare Systemumgebung",
         "Reduktion manueller Prozessschritte durch systematische Digitalisierung"])

    y_r = right_entry(c, y_r,
        "Wetterdienst-Webanwendung", "02/2025 - 04/2025",
        "Eigenprojekt  |  Java | REST API | Tomcat | Docker",
        ["Entwicklung einer REST-API mit mehreren Endpunkten fuer Forecast und Datenabfragen",
         "Strukturierung und Aufbereitung von Daten fuer unterschiedliche Anwendungsfälle",
         "Integration eines KI-Chatbots zur interaktiven Nutzeranfrage",
         "Containerisierung zur Vereinheitlichung der Entwicklungsumgebung"])

    c.showPage()

    # ════════════════════════ PAGE 2 ════════════════════════

    c.setFillColor(DARK_BG)
    c.rect(0, 0, LEFT_COL_W, PAGE_H, fill=1, stroke=0)

    MINI_HDR = 13*mm
    c.setFillColor(HEADER_BG)
    c.rect(0, PAGE_H - MINI_HDR, PAGE_W, MINI_HDR, fill=1, stroke=0)
    c.setFillColor(ACCENT)
    c.rect(0, PAGE_H - MINI_HDR - 1.5*mm, PAGE_W, 1.5*mm, fill=1, stroke=0)
    c.setFillColor(WHITE); c.setFont("Helvetica-Bold", 10)
    c.drawString(8*mm, PAGE_H - 8*mm, "EMERIC TCHOLAGHEU")

    y_l = PAGE_H - MINI_HDR - 9*mm
    y_r = PAGE_H - MINI_HDR - 9*mm

    # ── LEFT col p2
    y_l = left_section(c, y_l, "Sprachen")
    y_l = left_lang(c, y_l, "Deutsch",      "C2  —  verhandlungssicher")
    y_l = left_lang(c, y_l, "Franzoesisch", "C2  —  verhandlungssicher")
    y_l = left_lang(c, y_l, "Englisch",     "A2  —  Grundkenntnisse")
    y_l -= 4*mm

    y_l = left_section(c, y_l, "Arbeitsart")
    for s in ["Vor Ort in Bremerhaven",
              "Vor Ort in Norddeutschland",
              "Hybrid in Deutschland",
              "Remote in Deutschland"]:
        y_l = left_bullet(c, y_l, s)
    y_l -= 4*mm

    y_l = left_section(c, y_l, "Verfuegbarkeit")
    y_l = left_bullet(c, y_l, "Teilzeit: Vorlesungszeit")
    y_l = left_bullet(c, y_l, "Vollzeit: Semesterferien")
    y_l -= 4*mm

    y_l = left_section(c, y_l, "Arbeitsstart")
    y_l = left_bullet(c, y_l, "Werkstudent: ab sofort")
    y_l = left_bullet(c, y_l, "Praktikum: ab Oktober 2026")
    y_l -= 4*mm

    y_l = left_section(c, y_l, "Interessen")
    for s in ["Lesen", "Fussball spielen", "Comics zeichnen", "Gitarre spielen"]:
        y_l = left_bullet(c, y_l, s)

    # ── RIGHT col p2
    y_r = right_section(c, y_r, "Ausbildung")

    y_r = right_entry(c, y_r,
        "B.Sc. Informatik", "10/2023 - HEUTE",
        "Hochschule Bremerhaven",
        ["Schwerpunkte: Softwareentwicklung, Datenbanken, Systemarchitektur",
         "Relevante Kurse: Algorithmen & Datenstrukturen, Betriebssysteme, Webentwicklung, Datenbanksysteme"])
    y_r -= 3*mm

    y_r = right_section(c, y_r, "Weiterbildungen")

    y_r = right_entry(c, y_r,
        "GitHub Foundations + Git-Zertifizierungen", "2024",
        "GitHub",
        ["Introduction to Git, Intermediate Git",
         "Introduction to GitHub Concepts, Intermediate GitHub Concepts",
         "GitHub Foundations — offizielle Zertifizierung"])

    y_r = right_entry(c, y_r,
        "Java — Grundkurs bis Fortgeschrittene", "2024",
        "LinkedIn Learning",
        ["Grundlagen der Programmierung: Basiswissen",
         "Java Grundkurs 1: Sprachkonzepte und Programmiergrundlagen",
         "In die Java-Programmierung einsteigen  (Dez. 2024)",
         "Java fuer Fortgeschrittene"])

    y_r = right_entry(c, y_r,
        "Bash-Shell-Scripting fuer Fortgeschrittene", "Jan. 2025",
        "LinkedIn Learning",
        ["Variablen, Funktionen und Prozessmanagement"])
    y_r -= 3*mm


    c.save()
    print(f"Saved: {out}")

build()
