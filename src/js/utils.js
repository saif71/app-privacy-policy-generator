/*  
    SuperSimple Privacy Policy Generator: A simple web app to generate a generic 
    privacy policy for your Android/iOS apps

    Copyright 2017-Present STLRAxis

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */


function convertHtmlToMarkdown(html) {
  const converters = [{ filter: 'div', replacement: content => content }];
  const markdown = toMarkdown(html, { converters });
  return markdown;
}

function getRawHTML(content, title) {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset='utf-8'>
        <meta name='viewport' content='width=device-width'>
        <title>${title}</title>
        <style>
          body {
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            padding: 1em;
          }
        </style>
      </head>
      <body>
        ${content}
      </body>
    </html>
  `;
  return html;
}

function getContent(id) {
  const contentElement = document.getElementById(id);
  return contentElement.innerHTML;
}

function getTitle(id) {
  const contentElement = document.getElementById(id);
  const titleElement = contentElement.getElementsByTagName('strong')[0];
  return titleElement.innerHTML;
}

function loadContentInTextView(id, content) {
  const textViewElement = document.getElementById(id);
  textViewElement.value = content;
}


