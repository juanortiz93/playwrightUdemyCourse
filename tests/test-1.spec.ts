import { test, expect } from '@playwright/test';



    test.describe('Navegación en www.freerangetesters.com', ()=>{
        const secciones =[
            {nombre: 'Cursos', url: '/cursos',tituloEsperado: 'Cursos'},
            {nombre: 'Udemy', url: '/udemy',tituloEsperado: 'Udemy' },
            {nombre: 'Blog', url: '/blog',tituloEsperado: 'Free Range Testers' },
            {nombre: 'Academia', url: '/academia',tituloEsperado: 'Academia' },
            {nombre: 'Recursos', url: '/recursos',tituloEsperado: 'Recursos' }

        ];

        for (const seccion of secciones){
            test(`Validar redirección a la sección "${seccion.nombre}"`, async ({page})=>{
                await test.step('Estando yo en la web principal www.freerangetesters.com', async ()=>{
                    page.goto('https://www.freerangetesters.com/');
                    await expect(page).toHaveTitle('Free Range Testers');
                })

                await test.step(`Cuando hago click en el link "${seccion.nombre}"`, async ()=>{
                    page.locator('#page_header').getByRole('link', {name: seccion.nombre,exact: true}).click();
                    await page.waitForURL(`**${seccion.url}`);
                })

                await test.step(`Soy redirigido a la sección de titulo "${seccion.tituloEsperado}"`, async ()=>{
                    await expect(page).toHaveTitle(seccion.tituloEsperado);
                })


        
            });
        }



        

    })
