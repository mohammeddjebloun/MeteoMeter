
﻿using System; 
using System.Collections.Generic; 
using System.Linq; 
using System.Threading.Tasks;
using MeteoMeter.Backend.DataModels;
 
namespace MeteoMeter.Backend.Services
{ 
    public interface IResultService
    { 
		IQueryable<Result> GetAll(); 
		Task<Result> GetById(int id);      
        Task Save(Result entity); 
        Task Delete(int id); 
    } 
}