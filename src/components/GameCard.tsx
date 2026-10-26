export function GameCard() {
    return (
        <article className="card">
            <div className="card__cover">
                <img src="..." alt="..." />
                <span>Название</span>
                <b className="card__rating">5</b>
            </div>

            <div className="card__body">
                <h3>Название</h3>
                <p className="card__meta">Жанр, год</p>
                <p className="card__desc">Описание</p>
                <p className="card__platforms">Платформы</p>
            </div>

            <footer className="card__footer">
                <strong className="free">Бесплатно</strong>
                <button className="link-btn">Удалить</button>
            </footer>
        </article>
    )
}
