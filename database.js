import Database from "better-sqlite3"

const db = new Database('./data/database.sqlite')

db.prepare(`CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY AUTOINCREMENT, title STRING, content STRING)`).run()

export const getNotes = () => 
    db.prepare(`SELECT * FROM notes`)
    .all()

export const getNote = (id) =>
    db.prepare(`SELECT * FROM notes WHERE id = ?`)
    .get(id)

export const saveNote = (content, title) => 
    db.prepare(`INSERT INTO notes (title, content) VALUES (?,?)`)
    .run(title, content)

export const deleteNote = (id) =>
    db.prepare(`DELETE FROM notes WHERE id = ?`)
    .run(id)
   
const notes= [
    {title: 'első_jegyzet', content: "bevásárló lista"},
    {title: 'második_jegyzet', content: "kondi bérlet"},
    {title: 'harmadik_jegyzet', content: "focizás"},
    {title: 'negyedik_jegyzet', content: "kecske"},
    {title: 'ötödik_jegyzet', content: "futás"},
]

//for (const note of notes) saveNote(note.title, note.content)