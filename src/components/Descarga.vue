<template>
    <div>
        <h2>{{ title }}</h2>
            URL: <input width="20" v-model="url_info" name="url_info"/>
            <button v-on:click="click">Obtener informacion</button>

        <table>
            <tr>
                <td>ID formato</td>
                <td>Extension</td>
                <td>Tamaño</td>
                <td>Formato</td>
                <td>Ancho</td>
                <td>Alto</td>
            </tr>
            <tr v-for="format in formatos.data" :key="format['format_id']">
                <td>{{ format.format_id }}</td>
                <td>{{ format.ext }}</td>
                <td>{{ format.filesize }}</td>
                <td>{{ format.format }}</td>
                <td>{{ format.width }}</td>
                <td>{{ format.height }}</td>
                <td><a href="#" v-on:click="descargar(format.format_id)">Descargar</a></td>
            </tr>
        </table>

    </div>
</template>


<script>

    import { RepositoryFactory } from "../repository/RepositoryFactory";

    // eslint-disable-next-line no-unused-vars
    import fileDownload from 'js-file-download'

    const ytRepository = RepositoryFactory.get('yt')
    export default {
        name: 'Descarga',
        data() {
            return {
                url_info: '',
                formatos: []
            }
        },
        props: {
            title: String
        },
        methods: {
            click() {
                ytRepository.get(this.url_info).then( data => {
                    console.log(data);
                    this.formatos = data;
                });
            },
            descargar(id) {
                ytRepository.download(this.url_info, id)
                    .then(response => {
                        console.log(response)
                        //fileDownload(response.data, "file.mp4");
                    });
            }
        }
    }

</script>

<style scoped>

</style>