import { GameCard } from "./components/GameCard"
import { GameForm } from "./components/GameForm"
import "./App.css"

export default function App() {
    return (
        <div className="layout">
            <header className="top">
                <h1>Игровая полка</h1>
                <span>0 в коллекции</span>
            </header>

            <aside>
                <GameForm />
            </aside>

            <main>
                <p className="error">Ошибка: </p>
                <p className="hint">Загружаем игры…</p>
                <p className="hint">
                    Полка пуста. Добавьте первую игру через форму.
                </p>
                <div className="grid">
                    <GameCard />
                </div>
            </main>
        </div>
    )
}
