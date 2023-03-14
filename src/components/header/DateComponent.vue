<template>
    <div class="date">
        <p>
            {{ getWeekDay() }}
        </p>
        <div class="date__row">
            <p>
                {{ getCurrentDate }}
            </p>
            <p>
                <span class="material-icons">
                    schedule
                </span>
                {{ getCurrentTime }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            getCurrentDate: '',
            getCurrentTime: ''
        }
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
        },
        setTime() {
            this.getCurrentDate = new Date().getDate() + " " + this.getMonthDay() + " " + new Date().getFullYear()
            this.getCurrentTime = ('0' + new Date().getHours()).slice(-2) + ":" + ('0' + new Date().getMinutes()).slice(-2) + ":" + ('0' + new Date().getSeconds()).slice(-2)
        }
    },
    mounted() {
        setInterval(() => this.setTime(), 1000)
    },

}
</script>

<style lang="scss">
.date {
    white-space: nowrap;

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