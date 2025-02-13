import React from "react";
import cls from '../css/modules/Task.module.css'

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
      const openTaskModal = (props) => {
            console.log('Task: openTaskModal')
      }
      return (
            <article className={cls.task} 
                        onMouseOver={(e) => onMouseOver(e)} 
                        onMouseOut={(e) => onMouseOut(e)}
                        onClick={() => openTaskModal(props)}>
                  <div className={cls.task__marker}></div>
                  <div className={cls.task__about}>
                        <div className={cls.task__aboutName}>
                              <h3>{props.name}</h3>
                              <span className={cls.task__aboutNameSave} id='save' onClick={(e) => onClickSave(e)}>⭐</span>
                              <span className={cls.task__aboutNameFire} id='fire' onClick={(e) => onClickFire(e)}>🔥</span>
                        </div>
                        
                        <p className={cls.task__aboutComment}>{props.comment}</p>
                        <p className={cls.task__aboutFooter}>
                              <span className={cls.task__aboutPerformer}>{props.performer}</span>
                              <span className={cls.task__aboutStatus}>{props.status}</span>
                        </p>
                  </div>
                  <aside className={cls.task__info}>
                        <div className={cls.task__infoFrom}>
                              <time datatime={props.dataF}>{props.dataF}</time>
                              <time datatime={props.timeF}>{props.timeF}</time>
                        </div>
                        <div className={cls.task__infoTo}>
                              <time datatime={props.dataT}>{props.dataT}</time>
                              <time datatime={props.timeT}>{props.timeT}</time>
                        </div>
                        <div className={cls.task__infoAuthor}>
                              <p>{props.author}</p>
                        </div>
                        <div className={cls.task__infoStart}>
                              <time datatime={props.dataS}>{props.dataS}</time>
                              <time datatime={props.timeS}>{props.timeS}</time>
                        </div>
                  </aside>
            </article>
      )
}

export default Task