const btn_anim_data = {
  box_shadow_default: '',
  box_shadow_after: '',
  border_radius_default: '',
  border_radius_after: ''
}

document.querySelector('.wk-anim-btn').addEventListener('mouseenter', ({ target }) => {
  init_animation(target)
})

document.querySelector('.wk-anim-btn').addEventListener('mouseleave', ({ target }) => {
  finish_animation(target)
})

document.body.addEventListener('mousedown', ({ target }) => {
  if(target.classList.contains('wk-anim-btn')) {
    init_animation(target)
  }
})

document.body.addEventListener('touchstart', ({ target }) => {
  if(target.classList.contains('wk-anim-btn')) {
    init_animation(target)
  }
})

document.body.addEventListener('mouseup', ({ target }) => {
  if(target.classList.contains('wk-anim-btn')) {
    finish_animation(target)
  }
})

document.body.addEventListener('touchend', ({ target }) => {
  if(target.classList.contains('wk-anim-btn')) {
    finish_animation(target)
  }
})

document.body.addEventListener('click', ({ target }) => {
  if(target.classList.contains('wk-anim-btn')) {
    finish_animation(target)
  }
})

const collect_data_from_element = (target) => {
  btn_anim_data.box_shadow_default = window.getComputedStyle(target).getPropertyValue('--wk-bsw-default')
  btn_anim_data.box_shadow_after = window.getComputedStyle(target).getPropertyValue('--wk-bsw-after')
  btn_anim_data.border_radius_default = window.getComputedStyle(target).getPropertyValue('--wk-brd-radius-default')
  btn_anim_data.border_radius_after = window.getComputedStyle(target).getPropertyValue('--wk-brd-radius-after')
}

const init_animation = (target) => {
  collect_data_from_element(target)
  target.style.boxShadow = btn_anim_data.box_shadow_after
  target.style.borderRadius = btn_anim_data.border_radius_after
}


const finish_animation = (target) => {
  collect_data_from_element(target)
  target.style.boxShadow = btn_anim_data.box_shadow_default
  target.style.borderRadius = btn_anim_data.border_radius_default
}
