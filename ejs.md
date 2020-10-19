EJS
<% Tag for adding js - no output will be shown
<%= Outputs the value into the template and the browser
<%- Outputs the unescaped value into the template (can be used for includes)
<%# Comment tag, no execution, no output
#%> Closing comment tag
%> Regular Closing tag

<% let x = 'hello' %> will hold javascript but will not show in the browser

<p><%= x %></p>

<%# ..... #%>

http://localhost:3000/ejs/p/cadeau/tarzan?search=maybach
