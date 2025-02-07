import React from "react";

const Task = (props) => {
      const colors = [0, 0]
      const onClickSave = (event) => {
            colors[0] = (colors[0] + 1) % 2
            event.target.style.setProperty(
                  '--color-emoji-save',
                  colors[0] % 2 ? 'yellow' : 'rgba(0, 0, 0, 0.25)'
            )
      }
      const onClickFire = (event) => {
            colors[1] = (colors[1] + 1) % 2
            event.target.style.setProperty(
                  '--color-emoji-fire',
                  colors[1] % 2 ? 'orange' : 'rgba(0, 0, 0, 0.25)'
            )
      }
      const onMouseOver = () => {
            const save = document.getElementById('save')
            const fire = document.getElementById('fire')
            if (!colors[0])
                  save.setAttribute('style', '--color-emoji-save: rgba(0, 0, 0, 0.25)')
            if (!colors[1])
                  fire.style.setProperty('--color-emoji-fire', 'rgba(0, 0, 0, 0.25)')
      }
      const onMouseOut = () => {
            const save = document.getElementById('save')
            const fire = document.getElementById('fire')
            if (!colors[0])
                  save.style.setProperty('--color-emoji-save', 'var(--background)')
            if (!colors[1])
                  fire.style.setProperty('--color-emoji-fire', 'var(--background)')
      }
      return (
            <article className="task" onMouseOver={(e) => onMouseOver(e)} onMouseOut={(e) => onMouseOut(e)}>
                  <div className="task__marker"></div>
                  <div className="task__about">
                        <div className="task__about-name">
                              <h3>{props.name}</h3>
                              <span className="task__about-name-save" id='save' onClick={(e) => onClickSave(e)}>⭐</span>
                              <span className="task__about-name-fire" id='fire' onClick={(e) => onClickFire(e)}>🔥</span>
                        </div>
                        
                        <p className="task__about-comment">{props.comment}</p>
                        <p className="task__about--footer">
                              <span className="task__about-performer">{props.performer}</span>
                              <span className="task__about-status">{props.status}</span>
                        </p>
                  </div>
                  <aside className="task__info">
                        <div className="task__info-from">
                              <time datatime={props.dataF}>{props.dataF}</time>
                              <time datatime={props.timeF}>{props.timeF}</time>
                        </div>
                        <div className="task__info-to">
                              <time datatime={props.dataT}>{props.dataT}</time>
                              <time datatime={props.timeT}>{props.timeT}</time>
                        </div>
                        <div className="task__info-author">
                              <p>{props.author}</p>
                        </div>
                        <div className="task__info-start">
                              <time datatime={props.dataS}>{props.dataS}</time>
                              <time datatime={props.timeS}>{props.timeS}</time>
                        </div>
                  </aside>
            </article>
      )
}

export default Task