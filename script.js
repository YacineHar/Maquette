document.addEventListener('DOMContentLoaded', function () 
{
    var deroulant = document.querySelector('.deroulant');

    deroulant.addEventListener('click', function () 
    {
        deroulant.classList.toggle('open');
    });

    document.addEventListener('click', function (event) 
    {
        if (!deroulant.contains(event.target)) 
        {
            deroulant.classList.remove('open');
        }
    });
});
