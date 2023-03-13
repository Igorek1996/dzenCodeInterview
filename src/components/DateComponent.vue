<template>
    <div class="date">
        <p>
            {{ getWeekDay() }}
        </p>
        <div class="date__row">
            <p>
                {{ new Date().getDate() + " " + getMonthDay() + " " + new Date().getFullYear() }}
            </p>
            <p>
                <span class="material-icons">
                    schedule
                </span>
                {{ new Date().getHours() + ":" + new Date().getMinutes() }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {
        getWeekDay() {
            const date = new Date();
            let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
            return days[date.getDay()];
        },
        getMonthDay() {
            const date = new Date();
            let monthes = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Ноябрь', 'Декабрь'];
            return monthes[date.getMonth()];
        }
    }
}
</script>

<style lang="scss">
.date {
    &__row {
        display: flex;
        align-items: center;
        gap: 0 20px;
    }

    .material-icons {
        color: green;
        vertical-align: text-bottom;
    }
}
</style>