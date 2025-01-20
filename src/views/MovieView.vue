<template>
    <h1 class="text-2xl">{{ name }}</h1>
    <p v-if="status === 'active'">User is Active</p>
    <p v-else-if="status === 'pending'">User is pending</p>
    <p v-else>User is in active</p>

    <form @submit.prevent="addTask">
        <label for="newTask">Add Task</label>
        <input type="text" id="newTask" name="newTask" v-model="newTask">
        <button type="submit">Submit</button>
    </form>

    <h3>Tasks:</h3>
    <ul>
        <li v-for="(t, i) in tasks" :key="`tasks${i}`">
            <span>{{ t }}</span>
            <button @click="deleteTask(i)">X</button>
        </li>
    </ul>
    <p></p>
    <button @click="toggleStatus">Change Status</button>


</template>

<script setup>
import { onMounted, ref } from 'vue';

const name = ref('John Doe')
const status = ref('active')
const tasks = ref(['Task One', 'Task Tow', 'Task Three'])
const newTask = ref('aaa')

/**
 * 
 */
const toggleStatus = () => {
    if (status.value == 'active') {
        status.value = 'pending'

    } else if (status.value == 'pending') {
        status.value = 'inactive'
    } else {
        status.value = 'active'
    }
}

const addTask = () => {
    if (newTask.value.trim() !== '') {
        tasks.value.push(newTask.value)

    }
}

onMounted(async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await response.json()
        tasks.value = data.map(task => task.title)
    } catch (error) {
        console.error('Error fetching tasks.', error);

    }
})

/**
 * 
 * @param i Index
 */
const deleteTask = (i) => {
    tasks.value.splice(i, 1)
}

</script>

<style scoped></style>