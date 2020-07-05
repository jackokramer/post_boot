from django import forms
from .models import Post

class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields =('name', 'email', 'location', 'language', 'comments')
        widget = {
            'name': form.TextInput(attrs={'class': 'form-control'}),
            'email': form.TextInput(attrs={'class': 'form-control'}),
            'location': form.Select(attrs={'class': 'form-control'}),
            'language': form.Select(attrs={'class': 'form-control'}),
            'comments': form.TextArea(attrs={'class': 'form-control'})
        }