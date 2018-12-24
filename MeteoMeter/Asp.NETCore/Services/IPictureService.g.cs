
﻿using System; 
using System.Collections.Generic; 
using System.Linq; 
using System.Threading.Tasks;
using MeteoMeter.Backend.DataModels;
 
namespace MeteoMeter.Backend.Services
{ 
    public interface IPictureService
    { 
		IQueryable<Picture> GetAll(); 
		Task<Picture> GetById(int id);      
        Task Save(Picture entity); 
        Task Delete(int id); 
    } 
}