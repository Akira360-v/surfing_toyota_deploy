<template>
  <div class="adventure__header">
    <div class="container">
      <div class="adventure__surfing">
        <div class="surfing__head">
          <img src="@/assets/img/adventure__header/Push_the_limit_LOGOTYPE.png" alt="head logo">
          <div class="surfing__header">
            Серфинг
          </div>
          <div class="surfing__test">
            Петропавловск-Камчатский (а/п Елизово) — Паратунка —
            Петропавловск-Камчатский —  Халактырский пляж
          </div>
          <div class="surfing__stat">
            <div class="stat">
              <span>
                <figure class="stat__img">
                  <img src="@/assets/img/adventure__header/head_ICON.png" alt="km">
                </figure>
                <p class="stat__p">
                  84 км
                </p>
              </span>
              <span>
                <figure class="stat__img">
                  <img src="@/assets/img/adventure__header/head_ICON_time.png" alt="hours">
                </figure>
                <p class="stat_p">
                  2,5 часа без остановок
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdventureHeader',
//   props: {
//     msg: String
//   }
}
</script>

