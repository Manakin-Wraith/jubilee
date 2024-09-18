from django.core.mail import send_mail
from django.shortcuts import render, redirect
from django.conf import settings

def home(request):
    return render(request, 'index.html')

# views.py
def thank_you(request):
    return render(request, 'thank_you.html')

def quiz_form(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        print(f'Name: {name}, Email: {email}')  # Debugging
        q1 = request.POST.get('q1')
        q2 = request.POST.get('q2')
        q3 = request.POST.get('q3')

        subject = 'New Quiz Submission'
        message = f"""
        Name: {name}
        Email: {email}
        1. What type of gifts are you most interested in?: {q1}
        2. How often do you buy gifts?: {q2}
        3. What is your biggest challenge when choosing a gift?: {q3}
        """
        from_email = settings.DEFAULT_FROM_EMAIL
        to_email = 'jubilee@myjubilee.co.za'

        send_mail(subject, message, from_email, [to_email])

        return redirect('thank_you')  # Redirect to a thank you page or another view

    return render(request, 'quiz.html')