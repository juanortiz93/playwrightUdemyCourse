import {test, expect} from '@playwright/test';



test.describe('Acciones en el Automation Sandbox', () => {


    test('Playing with Assetions',async ({page}) => {

        await test.step('Voy a la pagina UI Test Playground', async () =>{
            await page.goto('https://uitestingplayground.com/textinput');
        })

        await test.step('Selecciono el input y es visible',async ()=>{
            await expect(page.locator('#newButtonName')).toBeVisible();
        })

        await test.step('Ingreso un texto en el input',async ()=>{
            await page.locator('#newButtonName').fill('Juan');
        })

        await test.step('Haz clic en le botón y valido que el texto del botón cambió',async ()=>{
            await page.locator('#updatingButton').click();
            await expect(page.locator('#updatingButton'),'El texto esperado no está').toHaveText('Juan');
        
        })
    })

    test('Click en Botón ID', async ({page}) => {
        await test.step('Dado que navego al sandbox de automation', async () =>{
            await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
        })

        await test.step('Puedo hacer click en el botón con ID Dinamico', async () =>{
             const botonIDDinamico = page.getByRole('button',{name: 'Hacé click para generar un ID dinámico y mostrar el elemento oculto'});
             await botonIDDinamico.click({force:true});
             await expect(page.getByText('OMG, aparezco después de 3')).toBeVisible();
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
            
            await expect(page.getByLabel('Pasta 🍝'),'El checkbox no estaba seleccionado').toBeChecked();

        })

        await test.step('Puedo desseleccionar el checkbox para Pasta',async ()=>{
            
            await page.getByLabel('Pasta 🍝').check();
            await expect(page.getByLabel('Pasta 🍝'),'El checkbox estaba seleccionado').not.toBeChecked();

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

    test('Puedo llenar un campo de texto en Automation Sandbox',async ({page}) => {
        const textoAEscribir = 'Este es un texto de prueba para Automation Sandbox';
        await test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () =>{
            await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
        })

        await test.step('Puedo ingresar texto en el campo Un Aburrido Texto',async ()=>{
            await expect(page.getByPlaceholder('Ingresá texto'),'El Campo de texto no admite edición').toBeEditable();
            await page.getByPlaceholder('Ingresá texto').fill(textoAEscribir);
            await expect(page.getByPlaceholder('Ingresá texto'),'El Campo de texto no admite edición').toHaveValue(textoAEscribir);
        })
    
    })

    test('Los items del dropdown son los esperados',async ({page}) => {
        const textoAEscribir = 'Este es un texto de prueba para Automation Sandbox';
        await test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () =>{
            await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
        })

        await test.step('Valido que la lista del Dropdown contiene los deportes esperados',async ()=>{
            const dropdownDeportes = page.locator('formBasicSelect');
            await expect(dropdownDeportes).toHaveValues(['Fútbol','Tennis','Basketball']);
        })
    
    })

    test('Los items del dropdown son los esperados 2', async ({ page }) => {
            await test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
            })
            await test.step('Valido que la lista del dropdown contiene los deportes esperados', async () => {
                const deportes = ['Fútbol', 'Tennis', 'Basketball']
 
                for (let opcion of deportes) {
                    const element = await page.$(`select#formBasicSelect > option:is(:text("${opcion}"))`);
                    if (element) {
                        console.log(`La opción '${opcion}' está presente.`);
                    } else {
                        throw new Error(`La opción '${opcion}' no está presente.`);
                    }
                }
 
            })
 
 
    })

    test('Valido la columna Nombres de la tabla estatica',async ({page}) => {
        
        await test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () =>{
            await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
        })

        await test.step('Puedo validar los elementos para la columna Nobre de la tabla estática',async ()=>{
            const valoresColumnaNombres = await page.$$eval('h2:has-text("Tabla Estática") + table tbody tr td:nth-child(2)',elements => elements.map(element => element.textContent));
            const nombresEsperados = ['Messi','Ronaldo','Mbappe'];

            await test.info().attach('screenshot',{
                body: await page.screenshot(),
                contentType: 'image/png',
            })

            expect(valoresColumnaNombres).toEqual(nombresEsperados);
            
        })
    
    })


    
    

})

