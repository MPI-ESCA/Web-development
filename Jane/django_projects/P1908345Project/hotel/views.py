from .models import Residence
from django.views.generic import CreateView, DetailView, UpdateView, DeleteView, ListView
from django.urls import reverse_lazy
from django.contrib.auth.mixins import LoginRequiredMixin

class ResidenceCreateView(LoginRequiredMixin, CreateView):
    model = Residence
    template_name = 'residence_new.html'
    fields = '__all__'

    def get_context_data(self,**kwargs):
        context = super().get_context_data(**kwargs)
        context['section']='newResidence'
        return context



class ResidenceDetailView(DetailView):
    model = Residence
    template_name = 'residence_detail.html'

class ResidenceListView(ListView):
    model = Residence
    template_name = 'home.html'

    def get_context_data(self,**kwargs):
        context = super().get_context_data(**kwargs)
        context['section']='dashboard'
        return context

class ResidenceUpdateView(UpdateView):
    model = Residence
    template_name = 'residence_edit.html'
    fields = ['title', 'estate', 'gross_area', 'rent', 'bedrooms', 'expected_tenants']

class ResidenceDeleteView(DeleteView):
    model = Residence
    template_name = 'residence_delete.html'
    success_url = reverse_lazy('home')
