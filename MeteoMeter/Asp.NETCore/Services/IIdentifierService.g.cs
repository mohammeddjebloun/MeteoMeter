
﻿using System; 
using System.Collections.Generic; 
using System.Linq; 
using System.Threading.Tasks;
using MeteoMeter.Backend.DataModels;
 
namespace MeteoMeter.Backend.Services
{ 
    public interface IIdentifierService
    { 
		IQueryable<Identifier> GetAll(); 
		Task<Identifier> GetById(int id);      
        Task Save(Identifier entity); 
        Task Delete(int id); 
    } 
}