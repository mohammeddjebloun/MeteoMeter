
﻿using System; 
using System.Collections.Generic; 
using System.Linq; 
using System.Threading.Tasks;
using MeteoMeter.Backend.DataModels;
 
namespace MeteoMeter.Backend.Services
{ 
    public interface IAnswerService
    { 
		IQueryable<Answer> GetAll(); 
		Task<Answer> GetById(int id);      
        Task Save(Answer entity); 
        Task Delete(int id); 
    } 
}