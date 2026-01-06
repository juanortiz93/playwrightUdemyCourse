import {test, expect} from '@playwright/test';



test.describe('Acciones en el Automation Sandbox', () => {

    test('Click en Botón ID', async ({page}) => {
        await test.step('Dado que navego al sandbox de automation', async () =>{
            await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
        })

        await test.step('Puedo hacer click en el botón con ID Dinamico', async () =>{
             const botonIDDinamico = page.getByRole('button',{name: 'Hacé click para generar un ID dinámico y mostrar el elemento oculto'});
             await botonIDDinamico.click();
        })
        

    })

    test('Lleno un campo de texto en Automation Sandbox',async ({page}) => {

        await test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () =>{
            await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
        })

        await test.step('Puedo ingresar texto en el campo Un Aburrido Texto',async ()=>{
            await page.getByPlaceholder('Ingresá texto').fill('Estoy aprendiendo Playwright con Free Range Testers');
        })

        

    })

    test('Puedo Seleccionar checkboxes',async ({page}) => {

        await test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () =>{
            await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
        })

        await test.step('Puedo seleccionar el checkbox para Pasta',async ()=>{
            await page.getByLabel('Pasta 🍝').check();
            await page.getByLabel('Pasta 🍝').uncheck();

        })

        

    })

    test('Puedo Seleccionar Radio buttons',async ({page}) => {

        await test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () =>{
            await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
        })

        await test.step('Puedo seleccionar el Radio Button para No',async ()=>{
            await page.getByRole('radio', { name: 'No' }).check();
            await page.getByRole('radio', { name: 'Si' }).check();

        })

        

    })

    test('Puedo Seleccionar un elemento del Dropdown',async ({page}) => {

        await test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () =>{
            await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
        })

        await test.step('Selecciono un deporte del Dropdown',async ()=>{
            await page.getByLabel('Dropdown').selectOption('Fútbol');
            

        })

        

    })

    test('Puedo Seleccionar un dia del dropdown Dias de la Semana',async ({page}) => {

        await test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () =>{
            await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
        })

        await test.step('Selecciono un dia de la semana',async ()=>{
            await page.getByRole('button', { name: 'Día de la semana' }).click();
            await page.getByRole('link', { name: 'Miércoles' }).click();

        })
    
    })

    test('Puedo subir archivos a Automation Sandbox',async ({page}) => {

        await test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () =>{
            await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
        })

        await test.step('Agrego archivos para ser subidos',async ()=>{
            await page.getByLabel('Upload File').setInputFiles(['./tests/Resources/archivo1.txt','./tests/Resources/imagen1.png']);

        })
    
    })

})

